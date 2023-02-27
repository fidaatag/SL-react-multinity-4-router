import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import AboutTeam from './AboutTeam';
import Blog from './Blog';
import BlogDetail from './BlogDetail';
import NotFound from './NotFound';
import Login from './Login';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='blog'>Blog</Link>
        <Link to='login'>login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />}>
          <Route path='team' element={<AboutTeam />} />
        </Route>
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:slug' element={<BlogDetail />} />
        <Route path='*' element={<NotFound />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
