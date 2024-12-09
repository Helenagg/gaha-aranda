import { Route, Routes } from 'react-router-dom';
import './App.css';
import './output.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Accessibility from './pages/Accessibility';
import Cookies from './pages/Cookies';
import CookiesBanner from './components/CookiesBanner';
import ScrollToTop from './components/ScrollToTop';

//TODO: Navbar Mobile
//TODO: Responsive
//TODO: use of cookies

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/nosotros' element={<About />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/aviso-legal' element={<Legal />} />
        <Route path='/privacidad' element={<Privacy />} />
        <Route path='/accesibilidad' element={<Accessibility />} />
        <Route path='/cookies' element={<Cookies />} />
      </Routes>
      <CookiesBanner />
      <Footer />
    </>
  );
}

export default App;
