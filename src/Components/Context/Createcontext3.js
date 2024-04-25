import React, { useContext } from 'react'
import {data,data2} from "./Creatcontext"

const Createcontext3 = () => {
    const name = useContext(data)
    const Lastname = useContext(data2)
  return (
    <div>
      <h1>Hi My Name Is {name}  {Lastname}</h1>
    </div>
  )
}

export default Createcontext3



// 🥰 contextAPI 🥰

// import React from 'react'
// import { context,context2 } from './Creatcontext'
// const Createcontext3 = () => {
//   return (
//     <div>

//         <context.Consumer>
//             {
//                 (Firstname)=>{
//                     return(
//                         <context2.Consumer>
//                             {
//                                 (Lastname)=>{
//                                     return(
//                                         <h1>{Firstname}{Lastname}</h1>

//                                     )
//                                 }
//                             }
//                         </context2.Consumer>
//                     )
//                 }
//             }
//         </context.Consumer>
      

//     </div>
//   )
// }

// export default Createcontext3

