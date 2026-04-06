import React from 'react';
import Actressdata from './Actressdata';



const Newdataholder = ({womendata}) => {
    console.log(womendata)
    return (
        <div>

            <Actressdata womendata={womendata}></Actressdata>
            
        </div>
    );
};

export default Newdataholder;