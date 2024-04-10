import React from 'react'
import {useNavigate} from 'react-router-dom'
function Login() {
    const navigate=useNavigate();
    function loginpage(){
        navigate('/github')

    }
   return (
     <div>
       <form>
        <h1>Login Form</h1>
        <input type='text' placeholder='enter the username'/><br/> <br/> <br/> 
        <input type='email' placeholder='enter your email'/> <br/> <br/> <br/> 
        <input type='number' placeholder='enter your number'/> <br/> <br/> <br/> 
        <input type='password' placeholder='enter the password'/><br/> <br/> <br/> 
        <button type='button' onClick={loginpage}>Login</button>

       </form>
     </div>
   )
  
}

export default Login
