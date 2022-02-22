import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home/Home'
import Products from './Pages/Porducts/Products'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import Submenu from './components/Submenu'
import Error from './Pages/Error/Error'
import Animals from './Pages/Animals/Animals'
import Dashboard from './Pages/Dashboard/Dashboard'
import AnimalList from './Pages/Animals/AnimalList/AnimalList'
import { AuthProvider } from './contexts/AuthContext'
import RequireAuth from './components/RequireAuth'
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import FAQ from './Pages/FAQ/FAQ'
import TermsOfUse from './Pages/TermsOfUse/TermsOfUse'
import ThankYou from './Pages/ThankYou/ThankYou'
import AllAnimals from './Pages/Animals/AllAnimals/AllAnimals'
import Button from './components/Button'
import SearchForm from './Pages/Animals/SearchForm/SearchForm'
import SingleAnimal from './Pages/SingleAnimal/SingleAnimal'
import { useGlobalContext } from './contexts/AppContext'

function App() {
  const { scrollTop } = useGlobalContext()
  const [display, setDisplay] = useState('none')

  // Add onscroll event listener determining to show the button or not
  useEffect(() => {
    scrollTop()
    window.addEventListener('scroll', showScrollBtn)

    // Always use a cleanup function to avoid the memery leak and overwritten issue
    return () => window.removeEventListener('scroll', showScrollBtn)
  }, [scrollTop])

  // When the user scrolls down 20px from the top of the document, show the button
  const showScrollBtn = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Submenu />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/sign-up' element={<SignUp />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/animals' element={<Animals />}>
              <Route index element={<AllAnimals />}></Route>
              <Route
                path=':animalType'
                element={
                  <>
                    <SearchForm />
                    <AnimalList />
                  </>
                }
              ></Route>
            </Route>
            <Route path='/animal/:id' element={<SingleAnimal />}></Route>
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
            <Route path='/about' element={<About />}></Route>
            <Route path='/faq' element={<FAQ />}></Route>
            <Route path='/terms-of-use' element={<TermsOfUse />}></Route>
            <Route path='/thank-you/:type' element={<ThankYou />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>
          <Button
            buttonStyle='btn--scrollUp'
            onClick={scrollTop}
            display={display}
          />
          <Footer />
        </AuthProvider>
      </Router>
    </>
  )
}

export default App
