import React,{useEffect, useState} from 'react'

const Cardmap = () => {

    const [Cards,setCards]=useState([])



    const GetCard=()=>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("https://fakestoreapi.com/products", requestOptions)
            .then((response) => response.json())
            .then((result) =>{
                setCards(result)
                console.log(result)})
            .catch((error) => console.error(error));
    }

    useEffect(()=>{
        GetCard()
    },[]) 


    const Data = [
        {
            image:"https://5.imimg.com/data5/SELLER/Default/2021/5/RI/NW/BQ/1756364/cricket-jersey-t-shirt.jpg",
            title:"Rodister",
            price:"599",
            category:"Men`s"
        },
        {
            image:"https://5.imimg.com/data5/SELLER/Default/2021/5/RI/NW/BQ/1756364/cricket-jersey-t-shirt.jpg",
            title:"Rodister",
            price:"599",
            category:"Men`s"
        },
    ]
  return (
    <div>
      <div className='container'>
        <div className='row'>
            {
                Cards.map((item,index)=>{
                    return(

                         <div className='col-12 col-md-3 col-lg-3 mt-5'>
                <div className='card text-center bg-dark text-white p-2' key={index}>
                    <img style={{width:"100%",height:"25vh"}} src={item.image}/>
                    <div className='card-body '>
                        <h5 className='card-title fs-6'>{item.title}</h5>
                        <p className='card-text fs-6'>{item.price}</p>
                        <p className='card-text fs-6'>{item.category}</p>
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

export default Cardmap
