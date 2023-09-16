import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'
const Home = () => {
    const user="Ram"
  return (
    <div>
        <center>
            <h1>Welcome to HomePage</h1>
            <Link to={`/dashboard/${user}`} className='Link'>Dashboard</Link>
            <Link to={`/about?name=${user}&age=${26}`} className='Link'>About</Link>
        </center>

    </div>
  )
}

export default Home