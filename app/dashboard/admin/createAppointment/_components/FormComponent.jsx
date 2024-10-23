import { bookAppointment } from "@/app/actions/appointment";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FormComponent = ({ userOptions }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    uid: "",
  });

  const router = useRouter()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // If the name field is changed, automatically set the corresponding email
    if (name === 'name') {
      const selectedUser = userOptions.map((user) => user.find((innerUser)=>innerUser.name === value));
      const newUser = selectedUser.filter((user)=> user != undefined)[0]
      console.log(newUser)
      if (newUser) {
        setFormData((prevData) => ({
          ...prevData,
          email: newUser.email,
          uid: newUser.userID
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          email: '',
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    const response = await bookAppointment({name: formData.name, email: formData.email, date: formData.date, time: formData.time}, formData.uid);
    response.status? router.push("/dashboard/admin") : ""
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          list="nameOptions"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <datalist id="nameOptions">
        {userOptions.map((user, index) => (
            <option key={index} value={user[0]?.name} />
          ))}
        </datalist>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          disabled
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-700"
        >
          Select Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleInputChange}
          required
          min={today}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="time"
          className="block text-sm font-medium text-gray-700"
        >
          Select Time
        </label>
        <select
          name="time"
          id="time"
          value={formData.time}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" defaultChecked>Select a time</option>
          <option value="08">Morning (8:00 AM)</option>
          <option value="12">Noon (12:00 PM)</option>
          <option value="18">Evening (6:00 PM)</option>
        </select>
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
