import React, { Component } from 'react'
import axios from 'axios'
class ComponentA extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          name:'',
          email:'',
          password:''
        }
      }
  
      onModify = (e) => {
          this.setState({
              [e.target.name]:e.target.value
          })
      }
      
      onSubmitValue = (e)=>{
          e.preventDefault();
          axios
              .post('http://localhost:4000/posts',this.state)
              .then(res=>console.log(res.data))
              .catch(err=>console.log("Something Went Wrong"))
  
      }
  
    render() {
      const {name,email,password}=this.state
      return (
        <div>
          <form onSubmit={this.onSubmitValue}>
             
                  <div>
                      <label>Name</label>
                      <input type='text' name='name' value={name} onChange={this.onModify}/>
                  </div>
                  <div>
                      <label>Email</label>
                      <input type='text' name='email' value={email} onChange={this.onModify}/>
                  </div>
                  <div>
                      <label>Password</label>
                      <input type='text' name='password' value={password} onChange={this.onModify}/>
                  </div>
                  <div>
                      <button type='submit'>Submit</button>
                  </div>
          </form>
      </div>
      )
    }
}

export default ComponentA