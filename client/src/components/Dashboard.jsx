import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const Dashboard = () => {
const navigate=useNavigate()
axios.defaults.withCredentials=true;
useEffect(()=>{

  axios.get("http://localhost:3000/verify")
  .then(res=>{
    if(res.data.status){

    }else{
      navigate("/")
    }
    console.log(res);
  })
})
  return (
    <div className='text-white'>
Dashboard
    </div>
  )
}

export default Dashboard