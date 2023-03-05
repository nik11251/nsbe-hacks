import { useState } from 'react';

const useToken = () => {

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        return tokenString
    };

    const {token, setToken} = useState(getToken());

    const saveToken = userToken => {
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}

export default useToken