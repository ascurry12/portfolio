import Gallery from './pages/gallery_page/Gallery';
import Home from './pages/home_page/Home';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
