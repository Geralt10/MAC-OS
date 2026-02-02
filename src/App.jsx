import React, { useState } from 'react'
import './App.scss'
import Doc from './components/Doc'
import Nav from './components/Nav'
import MacWindow from './windows/MacWindow'
import Github from './components/Github'
import Note from './components/Note'
import Resume from './components/Resume'
import Spotify from './components/Spotify'
import Cli from './components/Cli'
const App = () => {
  const[window, setWindow] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false,
  })
  return (
    <main>
      <Nav/>
      <Doc setWindow={setWindow}/>
      { window.github && <Github windowName="github"  setWindow={setWindow}/>}
      { window.note && <Note windowName="note"  setWindow={setWindow}/>}
      { window.resume && <Resume windowName="resume"  setWindow={setWindow}/>}
      { window.spotify && <Spotify windowName="spotify"  setWindow={setWindow}/>}
      { window.cli && <Cli windowName="cli"  setWindow={setWindow}/>}
    </main>
  )
}

export default App
