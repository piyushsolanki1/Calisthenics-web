import { useState } from 'react'
import {BrowserRouter as Router,  Route,Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


import Home from './Pages/Home'
import Progress from './Pages/Progress'
import Nutrition from './Pages/Nutrition'
import About from './Pages/About'
import WorkoutDetail from './Pages/WorkoutDetail'
import Workouts from './Pages/Workouts'
import Contact from './Pages/Contact'
import Challenges from './Pages/Challenges'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <Router>
      <Navbar />
<main className='min-h-screen flex flex-col bg-background text-foreground' >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/progress' element={<Progress />} />
          <Route path='/nutrition' element={<Nutrition />} />
          <Route path='/about' element={<About />} />
          <Route path='/workout/:id' element={<WorkoutDetail />} />
          <Route path='/workouts' element={<Workouts />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/challenges' element={<Challenges />} />
        </Routes>
        </main>
        <Footer />
    </Router>
  )
}

export default App
