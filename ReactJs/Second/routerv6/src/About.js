import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const About = () => {
    let {search}=useLocation()
    let params=new URLSearchParams(search)
  return (
    <div>
        <center>
            <h1>Welcome to About Page</h1>
            <h2>Name : {params.get('name')}</h2>
            <h2>Age : {params.get('age')}</h2>
            <Link to='/' className='Link'>Back to Home</Link>
        </center>
    </div>
  )
}

export default About