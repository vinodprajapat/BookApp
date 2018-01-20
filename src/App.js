import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import  Allbooks from './book/viewbooks';
import Home from './home/home';
import './App.css';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2 class="App"> Welcome to  Book Store </h2>
               <ul>
                  <li><Link to={'/'} >Home</Link></li>
                  <li><Link to={'/books'} > Books</Link></li>
               </ul>
               <hr />
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/books' component={Allbooks} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;