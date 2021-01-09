import React from 'react';
import ReactDOM from 'react-dom';
import './css/one-page-wonder.css'

import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
import Home from './pages/Home';
import Syllabus from './pages/Syllabus';
import Technique from './pages/Technique';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routing = () => {
  return(
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/syllabus" component={Syllabus} />
        <Route path="/technique" component={Technique} />
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