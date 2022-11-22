import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import { Parent } from './learn_withoutUsecallBack/parent'
// import { LearnCallBackHook } from './components/learn_usememo'
import {ParentCounter} from "./learn_callbackhook/parent"

function App() {
  

  return (
    <div className="App">
      {/* <LearnCallBackHook/> */}
      {/* <Parent/> */}
     <ParentCounter/>

      
    </div>
  )
}

export default App
