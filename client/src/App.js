import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Products from './Pages/Products'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Submenu from './components/Submenu'
import Error from './Pages/Error'
import Animals from './Pages/Animals'
import Dashboard from './Pages/Dashboard'
import AnimalType from './components/AnimalType'
import { AuthProvider } from './contexts/AuthContext'
import RequireAuth from './components/RequireAuth'
import UpdateProfile from './Pages/UpdateProfile'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'
import FAQ from './Pages/FAQ'
import TermsOfUse from './Pages/TermsOfUse'

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Submenu />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/sign-up' element={<SignUp />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/animals' element={<Animals />}>
              <Route path=':animalType' element={<AnimalType />}></Route>
            </Route>
            <Route
              path='/dashboard'
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            ></Route>
            <Route
              path='/update-profile'
              element={
                <RequireAuth>
                  <UpdateProfile />
                </RequireAuth>
              }
            ></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/about-us' element={<AboutUs />}></Route>
            <Route path='/faq' element={<FAQ />}></Route>
            <Route path='/terms-of-use' element={<TermsOfUse />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>

          <Footer />
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
