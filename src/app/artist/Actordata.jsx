"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setartists } from '../../../redux_toolkit/Feature';

const res = await fetch("http://localhost:4000/larki");
    const data = await res.json();
    const womendata = Array.isArray(data) ? data : [];

const Actordata = () => {

    const dispatch = useDispatch();
    const artistinfo = useSelector((state)=> state.artistxx.artistarr);

    useEffect(()=>{

        fetch("http://localhost:4000/artistdata")
        .then(res=>res.json())
        .then(data=>dispatch(setartists(data)))

    },[])
    return (
     <div>
  {artistinfo.map((singleartist, index) => {
    return (
      <div key={index}>
        <p>{singleartist.name}</p>
      </div>
    );
  })}

  {
    womendata.map((singlewoman,index)=>{
      return(
        <div key={index}>
          <p>{singlewoman.name}</p>
        </div>
      )
    })
  }
</div>
    );
};

export default Actordata;