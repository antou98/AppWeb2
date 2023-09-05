import React,{Component} from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./ApplicationTaxeAvecNavLink/Home";
import About from "./ApplicationTaxeAvecNavLink/About";
import TaxeClass from "./ApplicationTaxeAvecNavLink/TaxeClass.jsx";

function App2(){
        return(<div>
            <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white',backgroundColor : isActive ? 'white':'gray', padding:"5px" })}>
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white',backgroundColor : isActive ? 'white':'gray',padding:"5px" })}>
                            About
                        </NavLink>
                    </div>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'black' : 'white',backgroundColor : isActive ? 'white':'gray',padding:"5px"  })}>
                            Contact
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<TaxeClass />} />
                </Routes>
            </BrowserRouter>
        </div>);
}


export default App2;
