import React from 'react'
import "./Style.css"
const Navbar = () => {
  return (
    <>
      
    <div className='nb'>
      <div className='h-100' style={{backgroundImage:"linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%);"}}>

      <div class="container">
    <div className='row'>
      <div className=' col-5 col-md-8 col-lg-8 mt-4'>
      <h1  style={{color:"red"}}>NETFLIX</h1>
    
      </div>
      <div className='col-7 col-md-4 col-lg-4 mt-4 align-item-center'>
     
      <select className="px-3 me-2" style={{background:"black",color:"white",height:"35px"}} >
             <option value="1">English</option>
             <option value="2">Hindi</option>
      </select>
      <button class="btn btn-lg text-white" style={{backgroundColor:"rgb(229, 9, 20)",height:"37px"}} type="submit">Sing In</button>
      </div>
    </div>
  </div>

  <div className='container'>
    <div className='row'>
      <div className='col-12 col-md-12 col-lg-12 text-white text-center mt-5'>
        <h1 className='txt1' style={{fontSize:"3rem"}}>Unlimited movies, TV shows and more</h1>
        <p className='txt2' style={{fontSize:"1.6rem"}}>Watch anywhere. Cancel anytime.</p>
        <p className='txt2' style={{fontSize:"1.5rem"}}>Ready to watch? Enter your email to create or restart your membership.</p>

      </div>
    </div> 
  </div>

      </div>
  
    </div>
    </>
  )
}

export default Navbar
