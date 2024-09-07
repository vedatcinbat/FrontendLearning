import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, redirect } from 'react-router-dom';


const Login = () => {

    const { authState, login } = useContext(AuthContext);

    const [usernameReq, setUsernameReq] = useState('');
    const [passwordReq, setPasswordReq] = useState('');

    const handleLogin = () => {
        const loginReq = {
            username: usernameReq,
            password: passwordReq
        }

        alert(loginReq.username + " " + loginReq.password);

        login(loginReq);
    }

    return (
        <>
            {!authState.isAuthenticated ? (
                <>
                    <h2>Login Page</h2>
                    <div>
                        <label>
                            Username:
                            <input type="text" name="username" onChange={e => setUsernameReq(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" name="password" onChange={e => setPasswordReq(e.target.value)} />
                        </label>
                        <br />
                        <button onClick={handleLogin}>Login</button>
                    </div>
                </>
            ) : (
                <>
                    <p>You are already logged in</p>
                    <button onClick={() => redirect('/dashboard')}>Go to Home</button>
                    <button>
                        <Link to="/dashboard/profile">Go to Profile</Link>
                    </button>
                </>
            )}
        </>
    )
}

export default Login;