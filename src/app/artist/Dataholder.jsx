"use client";
import React from 'react';
import Actordata from './Actordata';
import store from '../../../redux_toolkit/store';
import { Provider } from 'react-redux';
import Actressdata from './Actressdata';



const res = await fetch("http://localhost:4000/larki");
    const data = await res.json();
    const womendata = Array.isArray(data) ? data : [];

const Dataholder = () => {
    return (
        <div>

            <Provider store={store}>
                <Actordata></Actordata>
                <Actressdata womendata={womendata}></Actressdata>
               

            </Provider>

            
            
        </div>
    );
};

export default Dataholder;