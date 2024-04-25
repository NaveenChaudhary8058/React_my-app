import React, { useEffect, useState } from 'react'

const Firstclass = () => {
    const [Cards,setCards] = useState([])
    const GetCard=()=>{
        const requestOptions = {
            method: "GET",
            redirect: "follow"
          };
          
          fetch("https://fakestoreapi.com/products", requestOptions)
            .then((response) => response.json())
            .then((result) =>{
                setCards(result)})
            .catch((error) => console.error(error));
    }
    useEffect(()=>{
        GetCard()
    },[])

    // const Data = [
    //     {
    //         img:"https://render.fineartamerica.com/images/rendered/search/metal-print/10/7/break/images/artworkimages/medium/1/world-map-watercolor-michael-tompsett.jpg",
    //         title:"Space",
    //         price:"$200"
    //     }
     
    // ]
  return (
    <div>
      <div className='container'>
        <div className='row'>
        {
           Cards?.map((Crd)=>{
                return(
                    <div className='col-12 col-md-3 col-lg-3 mt-5'>
                        <div className='card h-100'>
                                <img src={Crd.image} style={{width:"50%",height:"50%"}} className='card-img-top'/>
                            <div className='card-body'>
                            <div className='card-header'>
                                </div>
                                <div className='card-title text-center'>
                                    <h3>{Crd.title}</h3>
                                 </div>
                                 <p className='card-text text-center'>
                                    {Crd.price}
                                 </p>
                                 <p>{Crd.rating.rate}</p>
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

export default Firstclass
