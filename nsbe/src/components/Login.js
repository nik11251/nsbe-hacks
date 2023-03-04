import React, {useState} from "react";

async function loginUser(credentials) {
    return fetch("https://docs.google.com/spreadsheets/d/1lyH39RVvU1_D0d2uElNHjWSeYS3jDNTYBx8l1mN0NfI/edit?usp=sharing")
    .then((response) => {
        response.blob().then((fileBlob) => {

            var file = new File([fileBlob], "Sample.xlsx");
            
        })
    })
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