import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import Footer from './components/footer';
import BodyCard from './views/Bodycard';
import BodyCardTwo from './views/BodyCardTwo';
import BodyFavorito from './views/BodyFavorito';
import injectContext from "./store/appContext";
import BodyCardThree from './views/BodyCradThree';



function App() {

  return (
    <Router>
       <Navbar />
       <Switch>
         
         <Route path= '/character' component={BodyCard}/>
         <Route path='/favoritos' component={BodyFavorito}/>
         <Route path='/vehicles' component={BodyCardThree}/>
         <Route path= '/planets' component={BodyCardTwo}/>
       </Switch>
       <Footer />
    </Router>
  )
}

export default injectContext(App);
