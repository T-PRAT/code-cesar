import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Cesar from './pages/Cesar'
import Rsa from './pages/Rsa'
import Substitution from './pages/Substitution'
import Footer from './components/Footer'

function App() {

  return (
    <div className="bg-background-300 text-text h-screen flex">
      <NavBar />
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cesar" element={<Cesar />} />
          <Route path="/rsa" element={<Rsa />} />
          <Route path="/substitution" element={<Substitution />} />
        </Routes>
        <Footer />
      </main>
    </div>
  )
}

export default App
