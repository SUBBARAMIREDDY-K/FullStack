import React,{useState}from 'react'


const App = () => {
  const [data,setData] = useState({
    email:'',
    password:''
  })
  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    console.log(data)
    if(data.password.length<5){
      alert("Provide password length > 5")
    }
    else{
      console.log(data)
    }
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
          <label style={{'color': 'blue',fontFamily:"Tahoma"}}>E-mail</label> <br></br>
          <input type="text" name="email" onChange={changeHandler}/> <br></br>
          <label>Password</label> <br></br>
          <input type="password" name="pssword" onChange={changeHandler}/> <br></br>
          <button type="submit" className='btn btn-primary'>login</button>
        </form>
      </center>
    </div>
  )
}
export default App