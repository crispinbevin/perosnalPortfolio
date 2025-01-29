import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-dom"

import Home from './Home.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
