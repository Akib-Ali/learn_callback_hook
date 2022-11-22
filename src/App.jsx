import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Parent } from './learn_withoutUsecallBack/parent'
// import { LearnCallBackHook } from './components/learn_usememo'

function App() {
  

  return (
    <div className="App">
      {/* <LearnCallBackHook/> */}
      <Parent/>
    </div>
  )
}

export default App
