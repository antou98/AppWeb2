import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import TaxeQC from './components/TaxeQC';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/calcultaxe" element={<TaxeQC />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
