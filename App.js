import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import About from './about';
import FashionTrends from './FashionTrends';

function App() {
  return (
    <div className="App">
      <Router>
       <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/fashionTrends" element={<FashionTrends/>} />
          <Route path="/outfitIdeas" />
          <Route path="/Contact" />
        </Routes>
      </Router> 
    
    </div>
  );
}

export default App;
