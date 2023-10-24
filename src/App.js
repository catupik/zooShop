import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';

function App() {

  return (
    <Router>
      <nav>
        <Link className='link' to="/">ZooShop</Link>
        <Link className='link' to="/about">About</Link>
        <Link className='link' to="/contacts">Contact us</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>

    </Router>
  );
}

export default App;
