import React from 'react'
import Header from './Header'

const Class_1 = () => {
    const Class1 =[
        {
            fName: 'Naveen',
            lName: 'Chaudhary'

        },
        {
            fName: 'Sonu',
            lName: 'Chaudhary'

        },
        {
            fName: 'Pankaj',
            lName: 'Chaudhary'

        }
    ]
  return (
    <div>
        <Header/>
        {Class1.map((col)=>{
            return (
                <>
                <h1 style={{color:"pink"}}>{col.fName}</h1>
                <h1 style={{color:"brown"}}>{col.lName}</h1>
                </>
            )
        })}

    </div>
  )
}

export default Class_1

