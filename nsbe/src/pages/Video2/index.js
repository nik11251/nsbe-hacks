import React from "react";
import './index.css'
const Video2 = () =>{
    return (
        <div className="row">
            <div className="col-12 text-center">
                <h1 className="head">
                Local Party
                </h1>
            </div>
            <div className="col-12 text-center mt-4">
                <button className="buttons" id="createRoomButton">
                Create Room
                </button>
            </div>
            <div className="col-12 mt-4 text-center">
                <button className="buttons" id="joinRoomButton">
                Join Room
                </button>
            </div>
        </div>
    );
}

export default Video2