import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './about';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
