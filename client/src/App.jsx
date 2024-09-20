import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import DashBoard from './pages/dashBoard'
import Project from './pages/Project'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/footer'
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
