import React, {useState,useRef} from 'react'

const UseRef = () => {
    const [data,setData]=useState("Naveen")
    const inputRef = useRef()

    const Refresh = ()=>{
        setData(' ')
        inputRef.current.value = " Har Har Maha Dev "
        inputRef.current.style = " "
        inputRef.current.focus()
        inputRef.current.style.color = 'red'
        inputRef.current.style.fontSize = '30px'
        inputRef.current.style.backgroundColor = 'aqua'
        inputRef.current.style.textAlign = 'center'

    }
    const Update = ()=>{
        inputRef.current.value = 'Sonu'
        inputRef.current.style.color = 'brown'
        inputRef.current.style.fontSize = '30px'
        inputRef.current.style.backgroundColor = 'pink'
        inputRef.current.style.fontFamily = 'bold'
        inputRef.current.style.textAlign = 'center'
    }
  return (
    <div className='p-5'>
      <h1 style={{color:"pink",fontSize:"53px"}}>Jai Shree Ram</h1>

      <input style={{backgroundColor:"green",color:"white",fontSize:"30px",fontFamily:"bold",textAlign:"center"}} type="text" ref={inputRef} value={data} onChange={(e)=>{setData(e.target.value)}}/>
      <button className='btn-lg ms-5 px-5' onClick={()=>{Refresh()}}>Refresh</button>
      <button className='btn-lg ms-5 px-5' onClick={()=>{Update()}}>Update</button>
    </div>
  )
}

export default UseRef
