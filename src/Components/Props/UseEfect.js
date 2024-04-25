import React,{useState,useEffect} from 'react'

const UseEfect = () => {
  // const [Count,setCount]=useState(0)
  // const Effect= ()=>{
  //   setTimeout(()=>{
  //     setCount(Count+1)
  //   },1000)
  // }
  // useEffect(()=>{
  //   Effect()
  // })

  const [count,setCount]=useState();
  useEffect(()=>{
    setCount("First")
  },[])

  return (
    <div className='p-5'>
      {/* <h1>{Count}</h1> */}

      <button className='btn btn-primary px-5 ms-5' onClick={()=>{setCount("First")}} style={{backgroundColor:count==="First"?"green":"",color:count==="First"?"white":""}}>First</button>
      <button className='btn btn-warning px-5 ms-5' onClick={()=>{setCount("Secound")}} style={{backgroundColor:count==="Secound"?"yellow":""}}>Secound</button>
      <button className='btn btn-danger px-5 ms-5' onClick={()=>{setCount("Third")}} style={{backgroundColor:count==="Third"?"pink":""}}>Third</button>

      {
        count ==="First"?<h1 style={{backgroundColor:"pink",margin:"20px",width:"30%"}}>Ye Kali Kali AAnkhe</h1>:<></>
      }
      {
        count ==="Secound"?<h1 style={{backgroundColor:"brown",margin:"20px",width:"17%",color:"white"}}>Tu Ruru</h1>:<></>
      }
      {
        count ==="Third"?<h1 style={{backgroundColor:"orange",margin:"20px",width:"17%",color:"white"}}>Tu Ruru</h1>:<></>
      }
    </div>
  )
}

export default UseEfect
