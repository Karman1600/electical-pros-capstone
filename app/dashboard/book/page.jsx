import React from "react";

function page() {
  return (
    <div className="flex justify-center m-auto rounded-2xl items-center bg-slate-100 w-1/4 py-8 pt-6 h-auto mt-36 flex-col">
      <h2 className="flex text-center align-top font-bold text-xl font-sans mb-4">Book an appointment</h2>
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
            <label className="mt-1">Roll No</label>
            <input type="text" className="h-1" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
