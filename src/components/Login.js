import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'
function Login() {
    const navigate = useNavigate();

    function loginpage() {
        let nme = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let passwrd = document.getElementById('password').value;
        let num1 = document.getElementById('num').value;

        if (nme === '' || email === '' || passwrd === '' || num1 === '') {
            alert("Please enter all the fields");
        } else {
            navigate('/nav');
        }
    }

    return (
        <>
        <div className='loginform'>
            <form>
                <h1>Login Form</h1>
                <input type='text' id='name' placeholder='Enter the username' /><br /><br /><br />
                <input type='email' id='email' placeholder='Enter your email' /><br /><br /><br />
                <input type='number' id='num' placeholder='Enter your number' /><br /><br /><br />
                <input type='password' id='password' placeholder='Enter the password' /><br /><br /><br />
                <button type='button' onClick={loginpage}>Login</button>
            </form>
        </div>
        </>
    );
}

export default Login;
