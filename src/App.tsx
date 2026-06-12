import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Principles from './pages/Principles'
import StudyPlan from './pages/StudyPlan'
import Community from './pages/Community'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/principles" element={<Principles />} />
      <Route path="/study-plan" element={<StudyPlan />} />
      <Route path="/community" element={<Community />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
