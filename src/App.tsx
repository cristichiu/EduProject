import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import "../setPublic/css/init.css"
import Integrate from './integrate'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/EduMoldova/:id' element={<Integrate />}></Route>
      </Routes>
    </Router>
  )
}

export default App
