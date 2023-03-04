import React from 'react';
import { useHistory } from 'react-router-dom';

const Selection = () => {
    const history = useHistory();

    const handleClick1 = () => {
        history.push(`/page}`);
    };
    const handleClick2 = () => {
        history.push(`/page}`);
    };
    const handleClick3 = () => {
        history.push(`/page}`);
    };
    const handleClick4 = () => {
        history.push(`/page}`);
    };

    return (
        <div>
            <h1>Directory</h1>
            <div>
                <br></br>
                <button onClick={() => handleClick1()}>Chat Bot</button>
                <br></br>
                <button onClick={() => handleClick2()}>Human Chat</button>
                <br></br>
                <button onClick={() => handleClick3()}>Therapist</button>
                <br></br>
                <button onClick={() => handleClick4()}>Rate a User</button>
            </div>
        </div>
    );
};

export default Selection;