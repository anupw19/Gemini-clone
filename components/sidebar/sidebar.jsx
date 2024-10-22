import React, { useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";

const sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={() => setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
        <div className="newChat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recentTitle">Recent</p>
            <div className="recentEntry">
              <img src={assets.message_icon} alt="" />
              <p>What is react?</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottomItem recentEntry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottomItem recentEntry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottomItem recentEntry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
