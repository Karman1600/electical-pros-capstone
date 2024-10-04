"use client";
import { bookAppointment, checkAppointment } from "@/actions/appointment";
import React, { useEffect, useState } from "react";

function page() {
  // Date input restrictions implemented from :- https://stackoverflow.com/questions/43274559/how-do-i-restrict-past-dates-in-html5-input-type-date

  const [minDate, setMinDate] = useState("");
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
  });

  const setCurrentDate = () => {
    const dtToday = new Date();
    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    const year = dtToday.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    const formattedDate = `${year}-${month}-${day}`;
    setMinDate(formattedDate);
  };

  useEffect(() => {
    setCurrentDate();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming checkAppointment is an async function that checks availability
      const response = await checkAppointment(formData);
      console.log(response);
      setStatus(true);
      setMessage(response);
    } catch (error) {
      setStatus(true);
      setMessage({ message: "Error checking availability" });
    }
  };

  const handleBookAppointemnt = async () =>{
    const response = await bookAppointment(formData.date)
    console.log(response)
    
    response? setMessage({message: "Appointment Booked"}) : ""

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center m-auto rounded-2xl items-center bg-slate-100 w-1/4 py-8 pt-6 h-auto mt-36 flex-col">
      <h2 className="flex text-center align-top font-bold text-xl font-sans mb-4">
        Book an appointment
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-3 align-middle justify-center">
            <label className="mt-1">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="h-1"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex gap-3 align-middle justify-center">
            <label className="mt-1">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              className="h-1"
              required
            />
          </div>
          <div className="flex gap-3 align-middle justify-center">
            <label className="mt-1">Date</label>
            <input
              type="date"
              name="date"
              id="txtDate"
              min={minDate}
              value={formData.date}
              onChange={handleInputChange}
              className="h-1"
              required
            />
          </div>
          <div className="flex gap-3 align-middle justify-center">
            <button
              type="submit"
              className="p-2 bg-green-400 rounded-2xl hover:bg-slate-300"
            >
              Check availability
            </button>
          </div>
          {status && (
            <div className="flex align-middle justify-center p-2 mt-4 bg-blue-200 rounded-2xl">
              {message?.message}
            </div>
          )}
          {
            message?.message === "Available" && (<div>
              <button type="button" onClick={()=>handleBookAppointemnt()} className="flex align-middle justify-center p-2 mt-4 ml-20 bg-green-700 text-white rounded-2xl" >Book Now</button>
            </div>)
          }
        </form>
      </div>
    </div>
  );
}

export default page;
