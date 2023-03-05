import React, {useState} from "react";
import useToken from "../hooks/useToken";

import {fetchData, putData} from '../utils/AWSFunctions';

const loginUser = async (credentials) => {
    return fetchData('users', credentials)
}

const Login = (props) => {
    const {setToken} = props
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }

    return(
        <div>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}

export default Login