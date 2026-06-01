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
      <main>
        <BrowserRouter>
            <nav className='headerNav'>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink>
                <NavLink to="/stats" className={({ isActive }) => isActive ? "active" : ""}>Stats</NavLink>
                <NavLink to="/direct" className={({ isActive }) => isActive ? "active" : ""}>Direct</NavLink>
                <NavLink to="/streamers" className={({ isActive }) => isActive ? "active" : ""}>Streamers</NavLink>
                <div className='reseaux'>
                  <NavLink to="https://bsky.app/profile/moneyforflowers.bsky.social"><img src='blueskyBlack.png' alt='bluesky'/></NavLink>
                  <NavLink to="https://www.instagram.com/money.for.flowers"><img src='instaBlack.png' alt='instagram'/></NavLink>
                  <NavLink to="https://twitter.com/MoneyForFlowers"><img src='twitterBlack.png' alt='twitter'/></NavLink>
                </div>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/direct" element={<Direct />} />
              <Route path="/streamers" element={<Streamers />} />
            </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}

export default App;
