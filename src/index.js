import React from 'react';
import ReactDOM from 'react-dom';
import './css/one-page-wonder.css'

import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
import Home from './pages/Home';
import Syllabus from './pages/Syllabus';
import TieBelt from './pages/TieBelt';
import FrontRoll from './pages/FrontRoll';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const Routing = () => {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/syllabus" component={Syllabus} />
        <Route path="/tie-belt" component={TieBelt} />
        <Route path="/front-roll" component={FrontRoll} />
      </Switch>
      <Footer/>
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);