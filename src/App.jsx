import React from 'react'
import './App.scss'
import Doc from './components/Doc'
import Nav from './components/Nav'
import MacWindow from './windows/MacWindow'
import Github from './components/Github'
import Note from './components/Note'
import Resume from './components/Resume'
const App = () => {
  return (
    <main>
      <Nav/>
      <Doc/>

      <Github/>
      <Note/>
      <Resume/>
    </main>
  )
}

export default App
