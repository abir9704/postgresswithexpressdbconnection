"use client"
import React, { useEffect, useState } from 'react';



const Postgressdata = () => {

    const [playerdata, setplayerdata ] = useState([]);

   
    useEffect(()=>{
        fetch("http://localhost:4000/players")
        .then(res=>res.json())
        .then(data=>setplayerdata(data));
    },[])
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {playerdata.map((singledata, index) => (
    <div
      key={index}
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-start transition-transform hover:scale-105 hover:shadow-xl"
    >
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {singledata.player_name}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-1">
        <span className="font-medium">Jersey No:</span> {singledata.jersey_no}
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        <span className="font-medium">Country:</span> {singledata.country_name}
      </p>
    </div>
  ))}
</div>
    );
};

export default Postgressdata;