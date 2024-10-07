import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import DashBoard from './pages/dashBoard'
import Project from './pages/Project'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/footer'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './pages/createPost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import ScrollToTop from './components/ScrollToTop'
import Search from './pages/Search'

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/update-post/:postId" element={<UpdatePost/>}/>
        </Route>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/post/:postSlug" element={<PostPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
