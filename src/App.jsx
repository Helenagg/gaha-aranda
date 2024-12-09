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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/nosotros' element={<About />} />
        <Route path='/contacto' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
