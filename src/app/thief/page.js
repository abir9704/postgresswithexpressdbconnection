import Link from 'next/link';
import React from 'react';


const thiefobj = await fetch('http://localhost:4000/thieflegend');
const thiefjson = await thiefobj.json();
const thiefjsoncheckdata= Array.isArray(thiefjson) ? thiefjson : [];

const page = () => {
    
    return (
        <div>
            {

                thiefjsoncheckdata.map((singledata,index)=>{
                    return(
                        <div key={index}>
                            <p>{singledata.fullname}</p>
                        </div>
                    )
                }
            )
            
            }

           <div className='flex justify-center mt-70'>

              <Link href='/thief/addthief'>Add more thief to Database</Link>

           </div>
            
        </div>
    );
};

export default page;