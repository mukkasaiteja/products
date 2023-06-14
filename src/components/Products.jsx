import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Products() {
    const [user,setUser]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        
        .then((value)=>{
            setUser(value.data)
        })


    })
  return (
    <div>
<h1>hello word</h1>
<table style={{width:'100%'}} align='center' frame='box' rules='all'>
<thead>
       <tr>
        <th>image</th>
        <th>name</th>
        <th>description</th>
        <th>price</th>
        <th>rating</th>
        <th>count</th>
        </tr>
       
    </thead>
    <tbody>
{
user.map((event)=>{


    return(
       
        <tr>
            <td><img src={event.image} height='100px' width='100px' alt="" /></td>
            <td>{event.title}</td>
            <td>{event.description}</td>
            <td>{event.price}</td>
            <td>{event.rating.rate}</td>
            <td>{event.rating.count}</td>
        </tr>
    )
})


    }
    </tbody>
      </table>  
    </div>
  )
}

export default Products