import React from 'react';






const Magicianobj = await fetch("http://localhost:4000/magicianofmidfield");
const Magiciandata= await Magicianobj.json();

const Magician = () => {
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
              Magiciandata.map((singledata, index) => (
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