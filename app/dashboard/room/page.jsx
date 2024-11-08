"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const socket = io();

const Room = () => {
  const [roomId, setRoomId] = useState(null);
  const localStreamRef = useRef();
  const remoteStreamRef = useRef();
  const peerConnectionRef = useRef(null);
  const candidateQueue = useRef([]);

  const config = {
    iceServers: [
      {
        urls: [
          "stun:stun2.l.google.com:19302",
          "stun:stun1.l.google.com:19302",
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      peerConnectionRef.current = new RTCPeerConnection(config);

      peerConnectionRef.current.ontrack = (event) => {
        if (remoteStreamRef.current && !remoteStreamRef.current.srcObject) {
          remoteStreamRef.current.srcObject = event.streams[0];
        }
      };

      peerConnectionRef.current.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit("candidate", roomId, event.candidate);
        }
      };

      socket.on("offer", handleOffer);
      socket.on("answer", handleAnswer);
      socket.on("candidate", handleCandidate);
      socket.on("user-joined", () => {
        if (roomId) {
          createOffer();
        }
      });
    }
    return () => {
      socket.off("offer", handleOffer);
      socket.off("answer", handleAnswer);
      socket.off("candidate", handleCandidate);
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close();
      }
    };
  }, [roomId]);

  const createRoom = async () => {
    const id = uuidv4();
    setRoomId(id);
    socket.emit("create-room", id);
    await getUserMedia();
  };

  const joinRoom = async (id) => {
    setRoomId(id);
    socket.emit("join-room", id);
    await getUserMedia();
    // createOffer();
  };

  //   const getUserMedia = async () => {
  //     localStreamRef.current = await navigator.mediaDevices.getUserMedia({
  //       video: true,
  //       audio: true,
  //     });
  //     localStreamRef.current.getTracks().forEach((track) => {
  //       peerConnectionRef.current.addTrack(track, localStreamRef.current);
  //     });
  //   };

  const getUserMedia = async () => {
    try {
      const constraints = {
        video: { width: { ideal: 640 }, height: { ideal: 480 } },
        audio: true,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      localStreamRef.current.srcObject = stream;
      localStreamRef.current.play();
      stream.getTracks().forEach((track) => {
        peerConnectionRef.current.addTrack(track, stream);
      });
    } catch (error) {
      console.error("Error accessing media devices.", error);
    }
  };

  const createOffer = async () => {
    const offer = await peerConnectionRef.current.createOffer();
    await peerConnectionRef.current.setLocalDescription(offer);
    socket.emit("offer", roomId, offer);
  };

  const handleOffer = async (offer) => {
    await peerConnectionRef.current.setRemoteDescription(
      new RTCSessionDescription(offer)
    );

    // candidateQueue.current.forEach(async (candidate) => {
    //   await peerConnectionRef.current.addIceCandidate(candidate);
    // });
    // candidateQueue.current = [];

    const answer = await peerConnectionRef.current.createAnswer();
    await peerConnectionRef.current.setLocalDescription(answer);
    socket.emit("answer", roomId, answer);
  };

  const handleAnswer = async (answer) => {
    await peerConnectionRef.current.setRemoteDescription(
      new RTCSessionDescription(answer)
    );

    // candidateQueue.current.forEach(async (candidate) => {
    //   await peerConnectionRef.current.addIceCandidate(candidate);
    // });
    // candidateQueue.current = [];
  };

  const handleCandidate = async (candidate) => {
    const iceCandidate = new RTCIceCandidate(candidate);
    if (peerConnectionRef.current.remoteDescription) {
      peerConnectionRef.current.addIceCandidate(iceCandidate);
    } else {
      candidateQueue.current.push(iceCandidate);
    }
  };

  if (peerConnectionRef.current) {
    peerConnectionRef.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("candidate", roomId, event.candidate);
      }
    };
  }

  return (
    <div>
      <div className=" flex justify-center items-center align-middle ml-auto mt-4 gap-10 w-screen">
        <button onClick={createRoom} className="justify-center">
          <Image
            src={"/call-add.svg"}
            height={100}
            width={100}
            alt="create room icon"
          />
          Create Room
        </button>
        {roomId && <p>Room ID: {roomId}</p>}
        <button
          className=" justify-center"
          onClick={() => joinRoom(prompt("Enter Room ID"))}
        >
          <Image
            src={"/call-out.svg"}
            height={100}
            width={100}
            alt="join room icon"
          />
          Join Room
        </button>
      </div>
      {/* <video ref={localStreamRef} autoPlay playsInline muted></video> */}
      {/* <video ref={localStreamRef} autoPlay playsInline muted style={{ width: "100%", maxHeight: "400px" }}></video> */}
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <div>
          <h4>You:</h4>
          <video
            ref={localStreamRef}
            autoPlay
            playsInline
            muted
            style={{ width: "100%", maxHeight: "400px" }}
          ></video>
        </div>

        <div>
          <h4>...</h4>
          <video
            ref={remoteStreamRef}
            autoPlay
            playsInline
            style={{ width: "100%", maxHeight: "400px" }}
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Room;
