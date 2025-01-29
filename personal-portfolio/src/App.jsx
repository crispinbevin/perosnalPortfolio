import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './Home.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
