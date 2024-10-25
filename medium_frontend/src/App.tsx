import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignupPage } from './pages/signup_page/SignupPage'
import { SigninPage } from './pages/signin_page/SigninPage'
import { Blogs } from './pages/blogs_page/Blogs'
import { Blog } from './pages/blog_page/Blog'
import { CreateBlog } from './pages/create_blog_page/CreateBlogPage'

function App() {


  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blog/:postId' element={<Blog/>} />
          <Route path='/create' element={<CreateBlog/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
