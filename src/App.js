import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import Navbarii from './components/navbarii';



class App extends React.Component {
  render() {
    return(

    <div className="App">
      <Navbar />
      <Navbarii />
    </div>
  );
}}



export default App;
