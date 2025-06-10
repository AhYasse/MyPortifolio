import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './assets/fontawsome/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import EmailForm from './components/EmailForm';
import Main from './components/Main';
import Skills from './components/Skills';
import NavScroll from './components/NavScroll';
import Projects from './components/Projects';
import BackToTop from './BackToTop';


function App() {
  return (
  <>
    <Router>  
      <Header />
      <NavScroll />
      <BackToTop /> 
      <Main />   
      <Skills />
      <EmailForm />
      <Projects />
      <Footer />
    </Router>
  </>
  );
}

export default App;
