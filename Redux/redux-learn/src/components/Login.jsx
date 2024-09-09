import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';

export default function Login() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const userData = { username, token: 'fakeToken123' };
        dispatch(login(userData));
    }

    return (
        <div>
            <input type="text" placeholder="Username" value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}