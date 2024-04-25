import React,{useState} from 'react'

const Button = () => {
// const [count,setCount] = useState(0);

// const Incriment = () => {
//   setCount(count+1);
// };
// const Decriment = () => {
//   if(count>0){setCount(count-1)}
  
// };


// const [change,Name] = useState("changed name");
// const Chng =() => {
//   Name("radhe")
// }

// const [Name1,setName] = useState(0)
// const Data = ["a", "b", "c", "d", "e"]
// const Click =() => {
//   if(Name1 < Data.length-1)
//   setName(Name1+1)
  
// }


// const [bgcolor,setbgcolor]=useState("pink")
// const [txtcolor,settxtcolor]=useState('brown')
// const chngColor = () =>{
//   if(bgcolor == "pink"){
//     setbgcolor("black")
//     settxtcolor("white")
//   }
//   else{
//     setbgcolor("red")
//     settxtcolor("green")
//   }
// }

const [font, setFont] = useState(24)
const fontsize = ()=>{
  setFont(Math.min(font+4,125))
  // setFont(font+5)
  // if(font<100){

  //   setFont(font +5 )
  // }
  // else if(font==100){
  //   return
  // }
}
const fontsize1 = ()=>{
  setFont(Math.max(font-4,16))
//   if(font>40){
//   setFont(font -5)
  
// }
// else{
//   return
// }
}
  return (
    <div className='m-5'>
        
        {/* <h1>Click Count : {count}</h1>
      <button className='btn btn-primary btn-lg'onClick={()=>{Incriment()}}>Click me !</button>
      <button className='btn btn-primary btn-lg ms-5'onClick={()=>{Decriment()}}>Click me !</button>



     <h1>Change : {change}</h1>
     <button className='btn btn-danger btn-lg' onClick={()=>{Chng()}}>click me:</button>



     <h1> Click Again : {Data[Name1]}</h1>
     <button className='btn btn-lg btn-success'onClick={()=>{Click()}}>click me!</button> */}

{/* 
        <h1 style={{backgroundColor: bgcolor, color: txtcolor,width:"20%"}}>click me ! </h1>
        <button className='btn btn-lg btn-warning' onClick={()=>{chngColor()}}>click me!</button> */}

        <h1 className='ms-5' style={{fontSize: font,color:"pink"}}>{font} click me! </h1>
        <button className='btn btn-lg btn-warning ms-5' onClick={()=>{fontsize()}}>click me!</button>
        <button className='btn btn-lg btn-danger ms-5' onClick={()=>{fontsize1()}}>click me!</button>

    </div>
  )
}

export default Button
