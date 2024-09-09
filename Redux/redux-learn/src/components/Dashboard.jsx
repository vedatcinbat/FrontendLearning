import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import {logout} from '../redux/userSlice';

export default function Dashboard() {
    const {user, isAuthenticated} = useSelector(state => state.user);
    const dispatch = useDispatch();

    if(!isAuthenticated) {
        return <p>Please log in.</p>
    }

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}