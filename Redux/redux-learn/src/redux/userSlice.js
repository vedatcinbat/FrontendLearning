import {createSlice} from '@reduxjs/toolkit';
import {fetchUsers} from './userThunk';

const initialState = {
    users: [],
    loading: 'idle',
    error: null,
    user: null,
    isAuthenticated: false,
}

/* const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
}); */

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.loading = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.error.message;
        })
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;