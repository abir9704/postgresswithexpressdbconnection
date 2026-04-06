import React from 'react';
import Actordata from './Actordata';
import Dataholder from './Dataholder';
import Newdataholder from './Newdataholder';
import Actressdata from './Actressdata';

// ❌ PROBLEM HERE
// Top-level await in plain React component file
// This will fail in client-side React or Pages Router
const res = await fetch("http://localhost:4000/larki");
const data = await res.json();
const womendata = Array.isArray(data) ? data : [];

const page = () => {
    return (
        <div>
             <Dataholder></Dataholder>
             <Actressdata womendata={womendata}></Actressdata>
        </div>
    );
};
