const express=require('express');
const data1=require('./Data1');
const data2=require('./data2');
const cors=require('cors');
const app=express();
const PORT=5000;

app.use(cors({
    origin: '*'
}))
app.get('/data1', (req,res)=>{
    
    res.send(data1);
    console.log(data1);
    
    
})
app.get('/data2',(req,res)=>{
    
    res.send(data2);
    console.log(data2);
   
})

app.listen(PORT,()=>{
    console.log("server is listning at ",PORT )
})