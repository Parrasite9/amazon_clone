import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CSS Files/Login.css'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        // PREVENTS PAGE FROM REFRESHING
        e.preventDefault()

        // SOME FANCY FIREBASE LOGIN 


    }

    const register = (e) => {
        // PREVENTS PAGE FROM REFRESHING 
        e.preventDefault()

        // SOME FANCY FIREBASE ACCOUNT CREATION
    }

  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src='https://i.imgur.com/V584dvy.png' />    
        </Link>

        <div className='login_container'>
            <h1>Sign-In</h1>
            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={e =>
                    setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e =>
                    setPassword(e.target.value)} />

                <button className='login_button' type='submit' onClick={signIn}>Sign-In</button>
            </form>

            <p>
                By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. 
                Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
            </p>

            <button className='register_button' onClick={register}>Create Your Amazon Account</button>
        </div>
    </div>

  )

}

export default Login