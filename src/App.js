import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar';
import Footer from './components/footer';
import BodyCard from './views/Bodycard';
import BodyCardTwo from './views/BodyCardTwo';
import BodyCarousel from './views/BodyCarousel';

export default function App() {
  return (
    <Router>
       <Navbar />
       <Switch>
         <Route path ='/' exact component={BodyCard}/>
         <Route path= '/character' component={BodyCardTwo}/>
         <Route path='/planet' component={BodyCarousel}/>
         <Route path='/vehicles' component={BodyCard}/>

       </Switch>
       <Footer />
    </Router>
  )
}
