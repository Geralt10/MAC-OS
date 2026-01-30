import React from 'react'
import './App.scss'
import Doc from './components/Doc'
import Nav from './components/Nav'
import MacWindow from './windows/MacWindow'
import Github from './components/Github'
const App = () => {
  return (
    <main>
      <Nav/>
      <Doc/>

      <Github/>
      
    </main>
  )
}

export default App
