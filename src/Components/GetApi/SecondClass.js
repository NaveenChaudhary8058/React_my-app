import React, { useEffect, useState } from 'react'

const SecondClass = () => {

    const [use , usedata]= useState([])

    const NewApi = ()=>{
        try {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
              };
              
              fetch("https://fakestoreapi.com/carts/7", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    usedata([result])
                })
                // .catch((error) => console.error(error));
        } catch (error) {
            
        }
        
    }

    useEffect(()=>{
        NewApi()
    },[])
  return (
    <div>
      
    <div className='container'>
        <div className='row'>
            {
                use?.map((get,index)=>{
                    return(
                        <div className='col-12 col-md-4 col-lg-4'>
                            <div className='card'>
                                {/* {index+1} */}
                                <div className='body'>
                                    <h5>{get.id}</h5>
                                    <h5>{get.userId}</h5>
                                    <h5>{get.date}</h5>
                                    <h5>{get.products[0].productId}</h5>
                                    <h5>{get.products[0].quantity}</h5>
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

export default SecondClass
