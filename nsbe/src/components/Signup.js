import React, {useState} from "react";
import useToken from "../hooks/useToken";

import {fetchData, putData} from '../utils/AWSFunctions';

const signUpUser = async (credentials) => {
    return putData('users', credentials)
}

const Signup = (props) => {
    const {setToken} = props
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [repeatPassword, setRepeatPassword] = useState();
    

    const handleSubmit = async e => {
        e.preventDefault();
        await signUpUser({
            email,
            username,
            password,
            repeatPassword
        });
        const token = fetchData({
            username,
            password
        })
        setToken(token);
    }

    return(
        <div>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
            <label>
                <p>Email</p>
                <input type="text" onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <label>
                <p>Repeat your password</p>
                <input type="password" onChange={e => setRepeatPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
        </div>
    )
}

export default Signup