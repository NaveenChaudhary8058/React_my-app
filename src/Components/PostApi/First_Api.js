import React, { useState } from 'react'

const First_Api = () => {
    const [userName,setUserName]=useState()
    const [pass,setPass]=useState()
    const Login = ()=>{
        const formdata = new FormData();
        formdata.append("username", userName);
        formdata.append("password", pass);
        
        const requestOptions = {
          method: "POST",
          body: formdata,
          redirect: "follow"
        };
        
        fetch("https://dummyjson.com/auth/login", requestOptions)
          .then((response) => response.json())
          .then((result) => {console.log(result)})
          .catch((error) => console.error(error));
    }
  return (
    <div className='m-5'>
      
      <input type='text' className='py-3' value={userName} placeholder='Enter Your Name' onChange={(e)=>{setUserName(e.target.value)}} style={{width:"50%"}}/><br/><br/>

      <input type='password' className='py-3' value={pass} placeholder='Enter Your Password' onChange={(e)=>{setPass(e.target.value)}} style={{width:"50%"}}/><br/><br/>

      <button type='btn' onClick={()=>{Login()}} className='btn btn-lg px-5 py-3 btn-warning' style={{width:"50%"}}>Log In</button>

    </div>
  )
}

export default First_Api
