import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import Data from '../../Data'
import './Record.css';

const Record = () => {
    const [data,setData]=useState([]);

    async function getdata(){
        let resp=await fetch('http://localhost:5000/data1');
        let d=await resp.json();
        setData(d);
        console.log(data);
    }
    useEffect(()=>{
        getdata();
    },[])
  return (
    <div className='maindiv'>
        {
            data.map(d=>{
                return (
                    <div className='text-center card'>
                        <p>{d.title}</p>
                        <h1>{d.value}</h1>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Record