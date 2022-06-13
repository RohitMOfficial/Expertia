import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './Overview.css'


const Overview = () => {
    const [data,setData]=useState([]);

    async function getdata(){
        let resp=await fetch('http://localhost:5000/data2');
        let d=await resp.json();
        setData(d);
        console.log(d);
        console.log("main data",data);
        
    }
    useEffect(()=>{
        getdata();
    },[])
  return (
    <div className='overviewdiv'>
        <div className='overviewtop'>
            <p>Overview</p>
            <a href="#Sort">Sort</a>
            <a href="#Filter">Filter</a>
        </div>
        <div class="topnavbar">
            <a class="active" href="#home">Product</a>
            <a href="#news">Engineering</a>
            <a href="#contact">Design & Research</a>
            <a href="#about">Marketing</a>
            <a href="#about">Sales</a>


            <a href="#add" className='add'>+</a>
        </div>
        <div className='cardindiv'>
            {
                data.map(d=>{
                    return (
                    <Card user={d}/>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Overview