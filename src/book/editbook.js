import React, { Component } from 'react';
import './form.css';

class Editbookform extends Component {

constructor(props) {
    super(props);
    this.state = {
        book:{
            name:" ",
            author:"", 
            publisher:"",
            price:""
        }
    };

    this.handleName = this.handleName.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handlePublisher = this.handlePublisher.bind(this);
    this.handlePrice = this.handlePrice.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    let book = Object.assign({}, this.state.book);    //creating copy of object
    book.name = event.target.value;                        //updating value
    this.setState({book});

}

 handleAuthor(event) {
   let book = Object.assign({}, this.state.book);    //creating copy of object
    book.author = event.target.value;                        //updating value
    this.setState({book});
  }


     handlePublisher(event) {
    let book = Object.assign({}, this.state.book);    //creating copy of object
    book.publisher = event.target.value;                        //updating value
    this.setState({book});
    }

  handlePrice(event) {
    let book = Object.assign({}, this.state.book);    //creating copy of object
    book.price = event.target.value;                        //updating value
    this.setState({book});
   }


  handleSubmit(event) {
   // alert('A name was submitted: ' + this.state.book.name);
   let id= this.props.viewstate.editbook_id;
   //console.log("dbhbefvjf hbvhe " + id);

    this.props.editbookprop(id, this.state.book.name, this.state.book.author, this.state.book.publisher, this.state.book.price);
    event.preventDefault();
  }

  render() {
    return (
        <div>

        <h2> Edit Book </h2>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          </label>
          <input type="text" value={this.state.name} onChange={this.handleName} />
         <br />
        
         <label>
           Author:
           </label>
          <input type="text" value={this.state.author } onChange={this.handleAuthor} />
         <br />

          <label>
           Publisher:
           </label>
          <input type="text" value={this.state.publisher } onChange={this.handlePublisher} />
          <br />

         <label>
           Price:
           </label>
          <input type="text" value={this.state.price } onChange={this.handlePrice} />
          <br />
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}

export default Editbookform;