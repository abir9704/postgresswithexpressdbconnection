import React from 'react';



const Actressdata = ({womendata}) => {

    return (
        <div>
            

            {
                womendata?.map((singlewoman,index)=>{
                    return(
                        <div key={index}>
                            <p>{singlewoman.age}</p>
                        </div>
                    )
                })
            }
            
        </div>
    );
};

export default Actressdata;