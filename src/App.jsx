import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Plataforma from './Plataforma.jsx'
import VideoPlayer from './VideoPlayer.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Plataforma />} />
        <Route path="/plataforma" element={<Plataforma />} />
        <Route path="/plataforma/video/:id" element={<VideoPlayer />} />
      </Routes>
    </Router>
  )
}

export default App
