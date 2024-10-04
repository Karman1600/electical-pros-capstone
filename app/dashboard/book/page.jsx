"use client";
import { bookAppointment, checkAppointment } from "@/actions/appointment";
import { useUserAuth } from "@/lib/auth-context";
import { auth } from "@/lib/firebase";
import { redirect } from "next/navigation";
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
    time: "08"
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

  const handleBookAppointemnt = async () => {
    const response = await bookAppointment({name: user.displayName, email: user.email, date: formData.date, time: formData.time});
    console.log(response);

    response ? setMessage({ message: "Appointment Booked" }) : "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setMessage("")
    setStatus(false)

  };

  const { user } = useUserAuth();
  
  useEffect(() => {
      const checkUserLoggedIn = async () => {
        if (user) {
          console.log("Logged IN")
          // If the user is logged in, call loadWeather to fetch weather data
        } else {
          // Handle the case where the user is not logged in
          console.log('User is not logged in');
        }
      };

      checkUserLoggedIn(); // Call the function to check user login status
      
    }, [user]);

  return (
    <>
    {user? (      <div className="flex justify-center m-auto rounded-2xl items-center bg-slate-100 w-1/4 py-8 pt-6 h-auto mt-36 flex-col">
        <h2 className="flex text-center align-top font-bold text-xl font-sans mb-4">
          Book an appointment
        </h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-3 align-middle justify-center">
              <label className="mt-1">{user.displayName}</label>
              {/* <input
                type="text"
                name="name"
                id="name"
                className="h-1"
                value={formData.name}
                onChange={handleInputChange}
                required
              /> */}
            </div>
            <div className="flex gap-3 align-middle justify-center">
              <label className="mt-1">{user.email}</label>
              {/* <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="h-1"
                required
              /> */}
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

            <div class="flex justify-center items-center bg-gray-100">
              <label className="">Time Slot</label>

              <select
                name="time"
                id="time"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.time}
                defaultValue={"08"}
                onChange={handleInputChange}
              >
                <option value="08" defaultChecked>Morning (8:00 AM)</option>
                <option value="12">Noon (12:00 PM)</option>
                <option value="18">Evening (6:00 PM)</option>
              </select>
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
              <div className={`${message?.color ? " bg-blue-200" : "bg-red-500" } flex align-middle justify-center p-2 mt-4 rounded-2xl`}>
                {message?.message}
              </div>
            )}
            {message?.message === "Available" && (
              <div>
                <button
                  type="button"
                  onClick={() => handleBookAppointemnt()}
                  className="flex align-middle justify-center p-2 mt-4 ml-20 bg-green-700 text-white rounded-2xl"
                >
                  Book Now
                </button>
              </div>
            )}
          </form>
        </div>
      </div>) : (redirect("/sign-in"))}

    </>
  );
}

export default page;
