
import './App.scss';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Header from './Components/Header';
import 'font-awesome/css/font-awesome.min.css'

import Footar from './Components/Footar';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Header/>
       
 <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/About' element={<About />} />
  <Route path='/Skills' element={<Skills />} />
  <Route path='/Projects' element={<Projects />} />
  <Route path='/Contact' element={<Contact />} />
 </Routes>

  
 <Footar/>
      </header>
    
    </div>
  );
}

export default App;
