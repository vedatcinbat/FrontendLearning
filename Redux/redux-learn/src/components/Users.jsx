import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/userThunk';

const Users = () => {
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector(state => state.user);

    // Fetch users on component moun
    useEffect(() => {
        dispatch(fetchUsers());
    }, [])

    if(loading === 'loading') return <h1>Loading...</h1>
    if(loading === 'failed') return <h1>Error: {error}</h1>

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}   

export default Users;