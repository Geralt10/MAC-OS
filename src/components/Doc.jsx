/** @format */

import React from "react";
import "./Doc.scss";
const Doc = ({ setWindow }) => {
  return (
    <footer className='dock'>
      <div
        className='icon github'
        onClick={() => setWindow((prev) => ({ ...prev, github: true }))}
      >
        <img src='/doc-icons/github.svg' alt='' />
      </div>
      <div
        className='icon note'
        onClick={() => setWindow((prev) => ({ ...prev, note: true }))}
      >
        <img src='/doc-icons/note.svg' alt='' />
      </div>
      <div
        className='icon pdf'
        onClick={() => setWindow((prev) => ({ ...prev, resume: true }))}
      >
        <img src='/doc-icons/pdf.svg' alt='' />
      </div>
      <div
        className='icon calender'
        onClick={() =>
          window.open(
            "https://calendar.google.com/calendar/u/0/r","_blank",
          )
        }
      >
        <img src='/doc-icons/calender.svg' alt='' />
      </div>
      <div
        className='icon spotify'
        onClick={() => setWindow((prev) => ({ ...prev, spotify: true }))}
      >
        <img src='/doc-icons/spotify.svg' alt='' />
      </div>
      <div
        className='icon mail'
        onClick={() =>
          window.open(
            "https://mail.google.com/mail/?view=cm&to=himanshu.dhoundiyal.123@gmail.com&su=Hello&body=Hi Himanshu,",
            "_blank",
          )
        }
      >
        <img src='/doc-icons/mail.svg' alt='' />
      </div>
      <div
        className='icon link'
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/himanshu-dhoundiyal-718166217/","_blank",
          )
        }
      >
        <img src='/doc-icons/link.svg' alt='' />
      </div>
      <div
        className='icon cli'
        onClick={() => setWindow((prev) => ({ ...prev, cli: true }))}
      >
        <img src='/doc-icons/cli.svg' alt='' />
      </div>
    </footer>
  );
};

export default Doc;
