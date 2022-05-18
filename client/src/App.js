import './App.css'
import React, { useState, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ImArrowUp } from 'react-icons/im'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home/Home'
import Products from './Pages/Porducts/Products'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import Error from './Pages/Error/Error'
import Animals from './Pages/Animals/Animals'
import Dashboard from './Pages/Dashboard/Dashboard'
import AnimalList from './Pages/Animals/AnimalList/AnimalList'
import { AuthProvider } from './contexts/AuthContext'
import RequireAuth from './components/RequireAuth/RequireAuth'
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile'
import Contact from './Pages/Contact/Contact'
import About from './Pages/About/About'
import FAQ from './Pages/FAQ/FAQ'
import TermsOfUse from './Pages/TermsOfUse/TermsOfUse'
import ThankYou from './Pages/ThankYou/ThankYou'
import AllAnimals from './Pages/Animals/AllAnimals/AllAnimals'
import Button from './components/Button/Button'
import SearchForm from './Pages/Animals/SearchForm/SearchForm'
import SingleAnimal from './Pages/SingleAnimal/SingleAnimal'
import useUtils from './hooks/useUtils'

function App() {
  const { scrollTop } = useUtils()
  const [display, setDisplay] = useState('none')

  // When the user scrolls down 20px from the top of the document, show the button
  const showScrollBtn = () => {
    console.log('scroll')
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }

  // Add onscroll event listener determining to show the button or not
  useEffect(() => {
    // Throttle function
    const throttle = (callback, interval) => {
      let startTime = 0
      return (...args) => {
        const endTime = new Date()
        if (endTime - startTime > interval) {
          callback.apply(this, args)
          startTime = endTime
        }
      }
    }
    scrollTop()
    window.addEventListener('scroll', throttle(showScrollBtn, 500))

    // Always use a cleanup function to avoid the memery leak and overwritten issue
    return () => window.removeEventListener('scroll', showScrollBtn)
  }, [scrollTop])

  return (
    <Router>
      <AuthProvider>
        <ErrorBoundary FallbackComponent={Error}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/animals' element={<Animals />}>
              <Route index element={<AllAnimals />} />
              <Route
                path=':animalType'
                element={
                  <>
                    <SearchForm />
                    <AnimalList />
                  </>
                }
              />
            </Route>
            <Route path='/animal/:id' element={<SingleAnimal />} />
            <Route
              path='/dashboard'
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path='/update-profile'
              element={
                <RequireAuth>
                  <UpdateProfile />
                </RequireAuth>
              }
            />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/terms-of-use' element={<TermsOfUse />} />
            <Route path='/thank-you/:type' element={<ThankYou />} />
            <Route
              path='*'
              element={
                <Error
                  header='404'
                  content="Sorry, we can't find that page. Don't worry through,
        everything is still awesome."
                />
              }
            />
          </Routes>
          <Button
            buttonstyle='btn--scrollUp'
            onClick={scrollTop}
            display={display}
            aria-label='back to top'
            title='back to top'
          >
            <ImArrowUp />
          </Button>
          <Footer />
        </ErrorBoundary>
      </AuthProvider>
    </Router>
  )
}

export default App
