import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data; // Automatically becomes action.payload
    }
)

// Login user thunk
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (credentials, {isRejectedWithValue}) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if(!response.ok) {
                return isRejectedWithValue(data.message);
            }

            return data; // Return user data on success
        }catch(err) {
            return isRejectedWithValue(err.message);
        }
    }
)