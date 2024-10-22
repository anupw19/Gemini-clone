import React from "react";
import "./main.css"
import { assets } from "../../assets/assets";

const main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="mainContainer">
                <div className="greet">
                    <p><span>Hello,Anup.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest any beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize the concept:urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstrom team bonding activities for out work retreat</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>improve the readability of following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="mainBottom">
                    <div className="searchBox">
                        <input type="text" placeholder="Enter a prompt here"/>
                        <div className="">
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottomInfo">
                        Gemini may display inacurate info, incluing about people, so double-check its responses.Your privacy and Gemini Apps. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default main;