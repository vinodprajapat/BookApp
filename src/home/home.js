import React, { Component } from 'react';
import './home.css'

class Home extends Component {
   render() {
      return (
         <div class= "separator">
            <img   src= {require('./Bookstore.jpg')}  height="100%" width="100%" />
         </div>
      );
   }
}
export default Home;