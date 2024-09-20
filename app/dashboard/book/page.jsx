"use client"
import React, { useEffect, useState } from "react";

function page() {

// Date input restrictions implemented from :- https://stackoverflow.com/questions/43274559/how-do-i-restrict-past-dates-in-html5-input-type-date

    const [minDate, setMinDate] = useState("");

    useEffect(() => {
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
  
      setCurrentDate();
    }, []);

  return (
    <div className="flex justify-center m-auto rounded-2xl items-center bg-slate-100 w-1/4 py-8 pt-6 h-auto mt-36 flex-col">
      <h2 className="flex text-center align-top font-bold text-xl font-sans mb-4">
        Book an appointment
      </h2>
      <div>
        <form>
          <div className="flex gap-3 align-middle justify-center">
            <label className="mt-1">Name</label>
            <input type="text" className="h-1" />
          </div>
          <div className="flex gap-3 align-middle justify-center">
            <label className="mt-1">Email</label>
            <input type="email" className="h-1" />
          </div>
          <div className="flex gap-3 align-middle justify-center">
            <label className="mt-1">Date</label>
            <input type="date" id="txtDate" min={minDate} className="h-1" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
