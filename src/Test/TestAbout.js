import React from 'react'

const TestAbout = (props) => {

    const Data =[
      {
        Name:"Naveen Chaudhary",
        Stream:"Software Developer",
        image:"https://wallpapers.com/images/hd/bholenath-hd-shiva-meditating-clouds-xfnsokryh7vw4m0h.jpg",
        Village:"Behror",
        Mobile_No:"8058961484",
        Introduction:"I am a software developer"

      },
      {
        Name:"Naveen Chaudhary",
        Stream:"Software Developer",
        image:"https://wallpapers.com/images/hd/bholenath-hd-shiva-meditating-clouds-xfnsokryh7vw4m0h.jpg",
        Village:"Behror",
        Mobile_No:"8058961484",
        Introduction:"I am a software developer"

      },
    ]

  return (
    <div>

      <h1 className='text-center mt-5' style={{color:"violet",fontWeight:"900"}}>{props.name}</h1>
      <div className='container'>
        <div className='row'>
            {
              Data.map((data,index)=>{
                return(
                  <div className='col-12 col-md-6 col-lg-6 mt-5'>
                    
                    <div className='card text-center' key={index}>
                      <img src ={data.image}/>
                      <div className='card-body'>
                        <h3>{data.Name}</h3>
                        <h3>{data.Stream}</h3>
                        <h3>{data.Village}</h3>
                        <h3>{data.Mobile_No}</h3>
                        <h3>{data.Introduction}</h3>
                      </div>
                    </div>

                  </div>
                )
              })
            }
        </div>
      </div>
      

    </div>
  )
}

export default TestAbout
