import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignupPage } from './pages/signup_page/SignupPage'
import { SigninPage } from './pages/signin_page/SigninPage'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/signin' element={<SigninPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
