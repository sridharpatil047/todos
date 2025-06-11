import { Route, Routes } from 'react-router-dom'
import './stylesheets/App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import PageNotFound from './pages/PageNotFound'
import Footer from './components/Footer'
import Products from './pages/Products'
function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element = {<Products />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
