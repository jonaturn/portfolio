/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Bartending from "./Bartending";

//Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./styles.css";


/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Jonathen Cheng Yuzhe",
  title: "Computer Science Undergraduate",
  email: "jonathencheng86@gmail.com",
  gitHub: "jonaturn",
  linkedIn: "jonathen-cheng-03b3a2158",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
     <div id="main">
      <Router>
        <Routes>
          <Route path="/Bartending" element={<>
          <Bartending />
          </>} />
          <Route path="/npm" element={<>
            <Home name={siteProps.name} title={siteProps.title} />
            <About />
            <Portfolio />   
          </>} />
        </Routes>
      </Router> 
      <Header />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
