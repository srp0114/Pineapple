import React, { Suspense, lazy } from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "./components/layout/Nav"
import routes from "./routes.js"
const App = () => {
    return(
      
      <div className="App">
        <BrowserRouter>
        <Nav/>
        <Suspense >
        <Routes>
          {/* <Route path="/" exact="true" element={<Home />} /> */}
          {routes.map((route, index) => {
            return (
              route.component && (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              )
            );
          })}
          
          <Route path="*" element={<>Not found</>} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </div>

  )
}

export default App;