import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Dashboard from './Dashboard'
import Pagenotfound from './pagenotfound'
import Hoc from './Hoc'
const App = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path ="/dashboard/:name" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Hoc(App)
