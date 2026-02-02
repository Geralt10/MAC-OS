/** @format */

import React from "react";
import "./Spotify.scss";
import MacWindow from "../windows/MacWindow";
const Spotify = ({windowName,setWindow}) => {
  return (
    <MacWindow width="50vh" height="60vh"  windowName={windowName} setWindow={setWindow}>
      <div className='spotify-window'>
        <iframe
          data-testid='embed-iframe'
          style={{borderRadius: "12px"}}
          src='https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO3K21mU?utm_source=generator&theme=0'
          width='100%'
          height='100%'
          frameBorder='0'
          allowfullscreen=''
          allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
          loading='lazy'
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
