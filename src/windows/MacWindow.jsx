import React from "react";
import { Rnd } from "react-rnd";
import "./Window.scss";

const MacWindow = ({ children,width="60vw",height="60vh",windowName,window,setWindow }) => {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: width,
        height: height,
      }}
      dragHandleClassName="nav"
      minHeight={80}
      minWidth={300}
      
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div onClick={()=>setWindow(state=>({...state,[windowName]:false}))} className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
          </div>

          <div className="title">
            <p>Himanshu Dhoundiyal — zsh</p>
          </div>
        </div>

        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
