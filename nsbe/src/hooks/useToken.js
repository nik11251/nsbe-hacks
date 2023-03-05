import { useState } from 'react';

const useToken = () => {

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        if(!tokenString){
            console.log(tokenString)
            const userToken = JSON.parse(tokenString);
            return userToken?.token
        }
        return ""
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