import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Flipkart from './Components/Flipkart';
import Header from "./Components/Header"
import Snapdeal from "./Components/Snapdeal"
import Frontpage from "./Components/Frontpage"
import Amazon from './Components/Amazon';

function App() {
  return (
    <div>
      <Header/>

      <Router>
        <Switch>
          <Route exact path="/" component={Frontpage}/>
          <Route exact path="/snapdeal" component={Snapdeal}/>
          <Route exact path="/flipkart" component={Flipkart}/>
          <Route exact path="/amazon" component={Amazon}/>

        </Switch>
         
      </Router>
     
   
    </div>
  );
}

export default App;
