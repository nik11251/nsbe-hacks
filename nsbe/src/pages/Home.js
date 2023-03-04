import React, {useState} from "react";
import { useTransition } from "react-i18next";

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {t, i18n} = useTransition();

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
            <div style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "48px", fontWeight: "bold", textDecoration: "underline" }}>
                    {t("Login")}
                </h1>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src="Utoronto_coa.svg.png" alt="left-image" style={{ height: "50px", marginRight: "10px" }} />
                    <h2 style={{ fontSize: "32px", fontWeight: "bold" }}>Company Name</h2>
                    <img src="NSBELogo_Color_withName" alt="right-image" style={{ height: "50px", marginLeft: "10px" }} />
                </div>
            </div>


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
export default Home; //With translation



