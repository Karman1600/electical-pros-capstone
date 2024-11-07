import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const socket = io();

const Room = () => {
  const [roomId, setRoomId] = useState(null);
  const localStreamRef = useRef();
  const peerConnectionRef = useRef(new RTCPeerConnection());

  useEffect(() => {
    socket.on("offer", handleOffer);
    socket.on("answer", handleAnswer);
    socket.on("candidate", handleCandidate);

    return () => {
      socket.off("offer", handleOffer);
      socket.off("answer", handleAnswer);
      socket.off("candidate", handleCandidate);
    };
  }, []);


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
    createOffer();
  };


  const getUserMedia = async () => {
    localStreamRef.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localStreamRef.current.getTracks().forEach((track) => {
      peerConnectionRef.current.addTrack(track, localStreamRef.current);
    });
  };

  const createOffer = async () => {
    const offer = await peerConnectionRef.current.createOffer();
    await peerConnectionRef.current.setLocalDescription(offer);
    socket.emit("offer", roomId, offer);
  };

  const handleOffer = async (offer) => {
    await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await peerConnectionRef.current.createAnswer();
    await peerConnectionRef.current.setLocalDescription(answer);
    socket.emit("answer", roomId, answer);
  };

  const handleAnswer = async (answer) => {
    await peerConnectionRef.current.setRemoteDescription(new RTCSessionDescription(answer));
  };

  const handleCandidate = async (candidate) => {
    await peerConnectionRef.current.addIceCandidate(new RTCIceCandidate(candidate));
  };

  peerConnectionRef.current.onicecandidate = (event) => {
    if (event.candidate) {
      socket.emit("candidate", roomId, event.candidate);
    }
  };

  return (
    <div>
      <button onClick={createRoom}>Create Room</button>
      <button onClick={() => joinRoom(prompt("Enter Room ID"))}>Join Room</button>
      <video ref={localStreamRef} autoPlay playsInline muted></video>
    </div>
  );
};

export default Room;
