import React, {useState} from "react";

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //User inputs are required

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    } //Stores the value as the user types it, constant chnage so dont worry about lagging behin it

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }//Stores the value as the user types it, constant chnage so dont worry about lagging behin it

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username, 'Password:', password);
        //Add check to backend for valid username here (Add credifntials before hand)
    }

    return (
        <div>
            <h1>Login</h1>
            <br></br>
            <h1>Company Name</h1>
       
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={handleUsernameChange} />
                    </label>
                    <br></br>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default Home;