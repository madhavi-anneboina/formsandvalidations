import React,{useState} from 'react'

const Signup = () => {
    const [data,setData] = useState({
        username:'',
        email:'',
        password : '',
        confirmpassword:''
    })
    const {username,email,password,confirmpassword} = data 
    const changeHandler = (e) =>{
        setData({...data,[e.target.name]: e.target.value})
    }
    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(data)
     
    }
   
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
            <input type="text" name ="username"  value ={username} onChange={changeHandler} placeholder="username" /> <br/>
            {username && username.length <= 5 ? <p>User name grater rhan 5 chars </p> : ''}
            <input type="email" name="email" value={email} onChange={changeHandler} placeholder="email"/> <br/>
            <input type="password" name="password" value={password} onChange={changeHandler} placeholder="password" /> <br/>
            <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler} placeholder="confirm password" /> <br/>
            {password !== confirmpassword ? <p>Passwords must be same</p> :""}
            
            <button>Submit</button>
        </form>
      </center>
    </div>
  )
}

export default Signup
