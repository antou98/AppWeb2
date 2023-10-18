import React,{useState} from "react";
// commnade pour installer react router dom : npm install react-router-dom
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


import App from "./App";
import App2 from "./App2";
import AfficheConnected from "./ConnectedPage";

function Navigator(){

    let [connected,setConnected] = useState(false)
    

        return(
        <>
        {!connected ?(
                <BrowserRouter>

                <div id="sideNav">
                    <ul >
                        <li>
                        <   NavLink to="/">App1 </NavLink>
                        </li>
                        <li>
                            <NavLink to="/app2">App2 </NavLink>
                        </li>
                    </ul>
                </div>
               
            <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route exact path="/app2" element={<App2 funcChangeView={setConnected}/>} />
            </Routes>
            </BrowserRouter>
            ):(<><AfficheConnected/></>)}</>);
}
export default Navigator;