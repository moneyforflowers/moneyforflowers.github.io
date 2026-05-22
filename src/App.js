import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home.js';
import './App.css';
import Stats from './Stats.js';
import Streamers from './Streamers.js';
import Direct from './Direct.js';

import Footer from './Footer.js';

function App() {
  return (
    <>
      <BrowserRouter>
          <nav className='headerNav'>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
              <NavLink to="/stats" className={({ isActive }) => isActive ? "active" : ""}>Stats</NavLink>
              <NavLink to="/direct" className={({ isActive }) => isActive ? "active" : ""}>Direct</NavLink>
              <NavLink to="/streamers" className={({ isActive }) => isActive ? "active" : ""}>Streamers</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/direct" element={<Direct />} />
            <Route path="/streamers" element={<Streamers />} />
          </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
