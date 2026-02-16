// import { useState } from 'react'
import "./app.scss"
import Dock from "./componets/Dock"
import Nave from './componets/Nav';
import Linuxwindow from './componets/Windows/Linuxwindow';

function App() {


  return (
    <main>
      <Dock/>
      <Nave/>
      <Linuxwindow>
        <h1>hello</h1>
      </Linuxwindow>

    </main>

  )
}

export default App