"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';












const Magician = () => {
  const [holder,setholder] = useState([]);

 const deletehappen = async (id) => {
  try {
    // 1️⃣ UI theke instant remove
    setholder(prev => prev.filter(item => item.magicianid !== id));

    // 2️⃣ backend delete
    const response = await axios.delete(`http://localhost:4000/deletethief/${id}`);
    console.log("Deleted:", response.data);

  } catch (error) {
    console.error("Delete error:", error);
    // ❌ optional: error hole state wapas ana
    fetchdata();
  }
};

  const fetchdata =async()=>{

  const Magicianobj = await fetch("http://localhost:4000/magicianofmidfield");
const Magiciandata= await Magicianobj.json();
setholder(Magiciandata);

  
}

useEffect(()=>{
 fetchdata();
},[])
    return (
         <div className="max-w-[1600px] mx-auto flex items-center justify-center min-h-screen bg-gray-100 p-6">
      
      <div className="overflow-x-auto w-full">
        <table className="w-full bg-white shadow-2xl rounded-2xl overflow-hidden">
          
          {/* Table Head */}
          <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            <tr>
              <th className="py-5 px-8 text-left text-lg font-semibold">Name</th>
              <th className="py-5 px-8 text-left text-lg font-semibold">Jersey No</th>
              <th className="py-5 px-8 text-left text-lg font-semibold">Club</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {
              holder.map((singledata, index) => (
                <tr 
                  key={index} 
                  className="border-b hover:bg-gray-50 hover:scale-[1.01] transition duration-200"
                >
                  <td className="py-6 px-8 font-semibold text-gray-800">
                    {singledata.name}
                  </td>
                  <td className="py-6 px-8 text-gray-600">
                    {singledata.jerseyno}
                  </td>
                  <td className="py-6 px-8 text-gray-600">
                    {singledata.club}
                  </td>

                   <td className="py-3 px-4 text-white font-bold cursor-pointer  bg-amber-500" onClick={()=>deletehappen(singledata.magicianid)}>
                     dddd
                  </td>
                </tr>
              ))
            }
          </tbody>

        </table>
      </div>

    </div>



    );
};

export default Magician;