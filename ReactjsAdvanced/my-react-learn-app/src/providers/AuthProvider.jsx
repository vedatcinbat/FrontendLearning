import {useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { redirect } from 'react-router-dom';


export default function AuthProvider({children}) {
    const [users, setUsers] = useState([
        {
            username: 'thanix28',
            password: 'vedat123',
            email: 'vedat@gmail.com'
        }
    ]);

    const [authState, setAuthState] = useState({
        isAuthenticated: false,
        user: null,
        token: null
    });


    const login = (userLoginReq) => {
        const user = users.find(user => user.username === userLoginReq.username && user.password === userLoginReq.password);

        const randomToken = Math.random().toString(36).substr(2, 5);

        setAuthState({
            isAuthenticated: true,
            user: {
                username: user.username,
                email: user.email
            },
            token: randomToken
        });


        alert('Login Successful');


        localStorage.setItem('token', randomToken);

        redirect('/dashboard/profile');
    }

    const logout = () => {
        setAuthState({
            isAuthenticated: false,
            user: null,
            token: null
        });

        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{authState, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}