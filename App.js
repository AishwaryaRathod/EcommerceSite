import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Makeup from './components/Makeup';
import Hair from './components/Hair';
import Perfume from './components/Perfume';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
   <Route  path="/"  element={<Home />} />
   <Route  path="/Makeup"  element={<Makeup />} />
   <Route  path="/Hair"  element={<Hair />} />
   <Route  path="/Perfume"  element={<Perfume />} />
   <Route  path="/Contact"  element={<Contact />} />
   </Routes>

      
    </div>
     </Router>
  );
}

export default App;
