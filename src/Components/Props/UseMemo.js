// import React,{useState,useMemo} from 'react'

// const UseMemo = () => {
//     const [count,setCount] = useState(0);

//     const Incriment = () => {
//       setCount(count+1);
//     };
//     const Decriment = () => {
//       if(count>0){setCount(count-1)}
      
//     };

//     const Memo = useMemo(()=>{
//         console.log("hello");
//         return count*10
       
//     },[count])

//   return (
//     <div>
//         <h1>Click Count : {count}</h1>{Memo}
//       <button className='btn btn-danger btn-lg'onClick={()=>{Incriment()}}>Click me!</button>
//       <button className='btn btn-success btn-lg ms-5'onClick={()=>{Decriment()}}>Click me!</button>
      

//     </div>
//   )
// }

// export default UseMemo





// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


import React,{useState,useMemo} from 'react'

const UseMemo = () => {
  const[plus,setPlus]=useState(0)
  const [minus,setMinus]=useState(1000)

  const Mlty = useMemo(()=>{
    console.log("hello");
    return plus*10
  },[plus])
    return (
    <div className='m-5 p-5'>
      <h1>{plus}</h1>
      {Mlty}
      <button className='btn-lg btn-danger' onClick={()=>{setPlus(plus+1)}}> Plus</button>
      <h1>{minus}</h1>
      <button className='btn-lg btn-warning' onClick={()=>{setMinus(minus-1)}}> Minus</button>
    </div>
  )
}

export default UseMemo
