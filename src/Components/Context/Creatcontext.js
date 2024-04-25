import React, { createContext } from 'react'
import Createcontext3 from './Createcontext3';


const data = createContext()
const data2 = createContext()

const Creatcontext = () => {
    const name ="Naveen";
    const Lastname = "Chaudhary"

  return (
    <div>
      <data.Provider value={name}>
        <data2.Provider value={Lastname}>
                <Createcontext3/>
        </data2.Provider>

      </data.Provider>
    </div>
  )
}

export default Creatcontext
export {data,data2}



// 😎 ContextApi 🤓 

// import React, { createContext } from 'react'
// import Createcontext3 from './Createcontext3';

// const context = createContext()
// const context2 = createContext()

// const Creatcontext = () => {

//     const Firstname = "Har Har  ";
//     const Lastname = "  Maha Dev"


//   return (
//     <div>
//       <context.Provider value={Firstname}>
//         <context2.Provider value={Lastname}>
            
//         <Createcontext3/>

//         </context2.Provider>
//       </context.Provider>
//     </div>
//   )
// }

// export default Creatcontext
// export {context,context2}