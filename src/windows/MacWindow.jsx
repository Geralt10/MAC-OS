import React from "react";
import { Rnd } from "react-rnd";
import "./Window.scss";

const MacWindow = ({ children }) => {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
        width: 600,
        height: 400,
      }}
      bounds="window"
      dragHandleClassName="nav"
      minHeight={80}
      minWidth={300}
      enableResizing={{
        top: true,
        bottom: true,
        left: true,
        right: true,
        topLeft: true,
        topRight: true,
        bottomLeft: true,
        bottomRight: true,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div className="dot red" />
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
