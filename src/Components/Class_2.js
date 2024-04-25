import React from 'react'
import Header from './Header'

const Class_2 = () => {
    const table =[
        {
        first: 'Naveen',
        last: 'Chaudhary',
        mail: 'nc06390@gmail.com',
        mob:"8058961484"
    },
        {
        first: 'Sonu',
        last: 'Chaudhary',
        mail: 'jatdevta007@gmail.com',
        mob:"8279052008"
    },
        {
        first: 'Pankaj',
        last: 'Chaudhary',
        mail: 'chaudharypankaj@gmail.com',
        mob:"9467669464"
    }
]

return (
    <div>
      <Header/>
      <div className='container'>
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12'>

            <table class="table" style={{color:"red",fontSize:"20px",backgroundColor:"pink"}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">mail</th>
      <th scope='col'>mob</th>
    </tr>

  </thead>

  <tbody>
    {
        table.map((item,index)=>{
            return(
                <tr>
                <th scope="row">{index+1}</th>
                <td>{item.first}</td>
                <td>{item.last}</td>
                <td>{item.mail}</td>
                <td>{item.mob}</td>
              </tr>
            )
        })
    }

  </tbody>
</table>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Class_2
