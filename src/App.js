import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './pages/Contact';
import Header from './components/Header';
AOS.init({
  duration:1000
});

function App() {
  return (
    <div className="App">
    
    
   <Home/>
    </div>
  );
}

export default App;
