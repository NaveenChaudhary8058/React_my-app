import React from 'react'
import Header from './Header'
import '../App.css'

const Hello = () => {
  const data =[
    {
      hed:"This is my BIO Data",
      name:"Naveen Chaudhary",
      class:"I Am From Behror",
      img:"https://images.pexels.com/photos/19806430/pexels-photo-19806430/free-photo-of-halde-norddeutschland-in-neukirchen-vluyn-germany.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"

  },
    {
      hed:"This is my BIO Data",
      name:"Naveen Chaudhary",
      class:" I Am From Behror",
      img:"https://images.pexels.com/photos/19806430/pexels-photo-19806430/free-photo-of-halde-norddeutschland-in-neukirchen-vluyn-germany.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"

  },
    {
      hed:"This is my BIO Data",
      name:"Naveen Chaudhary",
      class:"I Am From Behror",
      img:"https://images.pexels.com/photos/19806430/pexels-photo-19806430/free-photo-of-halde-norddeutschland-in-neukirchen-vluyn-germany.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"

  },
    {
      hed:"This is my BIO Data",
      name:"Naveen Chaudhary",
      class:"I Am From Behror",
      img:"https://images.pexels.com/photos/19806430/pexels-photo-19806430/free-photo-of-halde-norddeutschland-in-neukirchen-vluyn-germany.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"

  },
    {
      hed:"This is my BIO Data",
      name:"Naveen Chaudhary",
      class:"I Am From Behror",
      img:"https://images.pexels.com/photos/19806430/pexels-photo-19806430/free-photo-of-halde-norddeutschland-in-neukirchen-vluyn-germany.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"

  },
    {
      hed:"This is my BIO Data",
      name:"Naveen Chaudhary",
      class:"I Am From Behror",
      img:"https://images.pexels.com/photos/19806430/pexels-photo-19806430/free-photo-of-halde-norddeutschland-in-neukirchen-vluyn-germany.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"

  },
]


  return (
    <div>
      <Header/>
       <div style={{backgroundColor:"azure"}} className='container'>
        <div className='row'>
            {data.map((card,index)=>{
              return(
          <div className='col-sm-12 col-md-4 col-lg-2 mt-5'>
                <div style={{backgroundColor:"lightpink"}} className='card ' key={index}>
                  <img src={card.img} alt="" />
                  <div className='card-header'>
                    <h5 style={{color:"lightpink",backgroundColor:"lightskyblue"}}>{card.hed}</h5>
                  </div>
                  <div className='card-body'>
                    <h6>{card.name}</h6>
                    <p>{card.class}</p>
                  </div>
                </div>
          </div>
              )
            
            })}

        </div>
       </div>
    </div>
  )
}

export default Hello
