import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Dashboard = () => {
    let params = useParams();
  return (
    <div>
        <center>
            <h1>Welcome to Dashboard</h1>
            <h2>Hello {params.name}</h2>
            <Link to='/' className='Link'>Back to Home</Link>
        </center>
    </div>
  )
}

export default Dashboard