import React, {useState} from "react";
import useToken from "../hooks/useToken";

import {fetchData, putData} from '../utils/AWSFunctions';
import userData from "../assets/userData.json"

const Login = (props) => {
    const {setToken} = props
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const userDatas = userData

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(username)
        setToken(username)
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