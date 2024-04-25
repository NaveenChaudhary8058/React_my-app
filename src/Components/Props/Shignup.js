// import React, { useState, useEffect } from 'react';

// const Shignup = () => {
//   const [sighin, setSighin] = useState();

//   useEffect(() => {
//     setSighin("first");
//   }, []);
//   return (
//     <div>

//       <div style={{ background: "black", color: "white", height: "80vh", padding: "5%" }}>
//         <div style={{ width: "50%", display: sighin === "first" ? "block" : "none" }}>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">MobNo.</label>
//             <input type="password" className="form-control" id="exampleInputPassword1" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">DOB</label>
//             <input type="password" className="form-control" id="exampleInputPassword1" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword1" />
//           </div>
//           <button type="submit" className="btn btn-primary" onClick={() => setSighin("second")}>Submit</button>
//         </div>
//       </div>

//       <div style={{ background: "green", color: "white", height: "50vh", padding: "5%" }}>
//         <div style={{ width: "50%", display: sighin === "second" ? "block" : "none" }}>
//           <div className="mb-3">
//             <h1>Sign in</h1>
//             <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword2" />
//           </div>
//           <button type="submit" className="btn btn-primary" onClick={() => setSighin("first")}>Login</button>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Shignup;




// [import React, { useState, useEffect } from 'react';

// const Signup = () => {
//   const [page, setPage] = useState("first");

//   useEffect(() => {
//    setPage("first");
//   }, []);

//   const Back = () => {
//     setPage("first");
//   };

//   return (
//     <div>
//       {page === "first" && (
//         <div style={{ background: "black", color: "white", height: "80vh", padding: "5%" }}>
//           <div style={{ width: "50%" }}>
//             <h1>Sing Up</h1>
//             <div className="mb-3">
//               <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//               <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">MobNo.</label>
//               <input type="Mobilenumber" className="form-control" id="exampleInputPassword1" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">DOB</label>
//               <input type="DOB" className="form-control" id="exampleInputPassword1" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//               <input type="password" className="form-control" id="exampleInputPassword1" />
//             </div>
//             <button type="submit" className="btn btn-primary" onClick={() => setPage("second")}>Submit</button>
//           </div>
//         </div>
//       )}

//       {page === "second" && (
//         <div style={{ background: "green", color: "white", height: "50vh", padding: "5%" }}>
//           <div style={{ width: "50%" }}>
//             <h1>Sign in</h1>
//             <div className="mb-3">
//               <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
//               <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword2" className="form-label">Password</label>
//               <input type="password" className="form-control" id="exampleInputPassword2" />
//             </div>
//             <button type="submit" className="btn btn-primary" onClick={Back}>Back</button>
//             <button type="submit" className="btn btn-primary ms-3" onClick={() => console.log("Login")}>Login</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Signup;]



import React,{useState,useEffect} from 'react'
import { FaFastBackward } from "react-icons/fa";

const Shignup = () => {
  const [data,setData]= useState()
  useEffect(() => {
    setData("first")
  },[]);
  return (
    <div>

      <div style={{display:data ==="first"?"block":"none"}} className='m-5 w-50 p-5'>
     
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button  class="btn btn-primary" onClick={()=>{setData("sec")}}>Sognin</button>

      </div>

      <div style={{display:data=== "sec"?"block":"none"}} className='m-5 p-5 w-50'>
      <FaFastBackward style={{color:"red",fontSize:"30px"}} onClick={()=>{setData("first")}} className='m-2' />
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <button class="btn btn-primary">login</button>
      </div>

    </div>
  )
}

export default Shignup





