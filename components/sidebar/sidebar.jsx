/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState, useContext} from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentprompt,newChat } = useContext(Context);

  const loadPrompt = async (prompt) =>{
    setRecentprompt (prompt)
    await onSent (prompt)
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={() => setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
        <div onClick={()=>newChat()} className="newChat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recentTitle">Recent</p>
            {prevPrompts.map((item,index)=> {
              return (
                <div onClick={()=>loadPrompt(item)} className="recentEntry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0,18)}...</p>
                </div>
              )
            })}  
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

export default Sidebar;
