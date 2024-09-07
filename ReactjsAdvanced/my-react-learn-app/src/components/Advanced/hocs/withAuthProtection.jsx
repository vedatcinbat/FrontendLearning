import React from 'react';
import { Redirect } from 'react-router-dom';

const withAuthProtection = (WrappedComponent) => {
    return (props) => {
        const isAuthenticated = !!localStorage.getItem('token');

        if(!isAuthenticated) {
            return <Redirect to="/login" />
        }

        return <WrappedComponent {...props} />
    }
}

export default withAuthProtection;