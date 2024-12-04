import { Route, Routes } from 'react-router-dom';
import './App.css';
import './output.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/servicios' element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
