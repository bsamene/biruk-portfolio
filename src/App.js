
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
        </Navbar>
        <Routes>
          <Route path = "/homepage" element = {<Home />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/project/:id" element = {<ProjectDisplay />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
