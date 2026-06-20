import React from 'react'
import "../form.auth.scss"
import { useNavigate, Link } from 'react-router'

const Login = () => {
    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type='text' id='email' name='email' placeholder='Enter email address ' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Password</label>
                        <input type='text' id='password' name='password' placeholder='Enter password ' />
                    </div>
                    <button className='button primary-button'>Login</button>
                </form>
                <p>Don't have an account ? <Link to={"/register"}>Login</Link></p>

            </div>
        </main>
    )
}

export default Login
