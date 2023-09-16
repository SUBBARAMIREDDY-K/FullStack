import axios from 'axios'
import React, { Component } from 'react'

 class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         uname:"",
         email:"",
         password:""
      }
    }
    onChangeValue=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onsubmitValue = (e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response=>console.log(response.data))
        .catch(err=>alert("error"))
        // alert("Hii"+this.state.uname);
        
        console.log(this.state)
    }
  render() {
    const {uname,email,password}=this.state
    return (
        <div>
            <form onSubmit={this.onsubmitValue}>
                <div>
                    <label>Username</label>
                    <input type="text" name="uname" value={uname} onChange={this.onChangeValue}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={this.onChangeValue}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="password" value={password} onChange={this.onChangeValue}/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
         </div>
    )
  }
}

export default PostList