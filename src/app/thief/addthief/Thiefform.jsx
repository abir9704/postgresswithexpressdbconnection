"use client"
import React from 'react';

const Thiefform = () => {
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const namedata = e.target.fullname.value;
        const countrydata = e.target.country.value;
        const agedata = e.target.age.value;
        const famousfordata = e.target.famousfor.value;
        const theftinfodata = e.target.theftinfo.value;

        const thiefjson = {
            "fullname":namedata,
            "country":countrydata,
            "age":agedata,
            "famousfor":famousfordata,
            "theftinfo":theftinfodata,
        }
await fetch("http://localhost:4000/addthief", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(thiefjson)
});

e.target.reset();
       
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add a New Thief
        </h2>

        <form onSubmit={handlesubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter full name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter country"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter age"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Famous For */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Famous For</label>
            <input
              type="text"
              name="famousfor"
              placeholder="What is the thief famous for?"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Theft Info */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Theft Info</label>
            <textarea
              name="theftinfo"
              placeholder="Describe theft info"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-200"
            >
              Add Thief
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Thiefform;