import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Addbookform  from './addbookform';
import Editbookform from './editbook'
import './viewbook.css'

class Allbooks extends Component {
   constructor(props){
       super(props);

       this.state = {
        books: [
            {
                 id:1,
                 name:"Java",
                 author:"KK ",
                 publisher:"Amazon",
                 price: 50

            },
             {
                 id:2,
                 name:"c++",
                 author:"bnm",
                 publisher:"Amazon",
                 price: 50
            }

        ],
      
        addbook_showcomponent: false,
        editbook_showcomponent:false,
        editbook_id:0

       }
       this.addbook= this.addbook.bind(this);
       this.editbook= this.editbook.bind(this);
       this.deletebook=this.deletebook.bind(this);
       this.updatestate= this.updatestate.bind(this);
       this.editstate=this.editstate.bind(this);
   }

updatestate(name1, author1, publisher1, price1){
    console.log("msg from addbookform " + name1);
       
      let book= {
       id:this.state.books.length+1,
       name:name1,
       author:author1,
       publisher: publisher1,
       price:price1
      }

    var newStateArray = this.state.books.slice();
    newStateArray.push(book);
    this.setState({books: newStateArray,
        addbook_showcomponent: false});
}


addbook(){
this.setState({
 addbook_showcomponent: true,
 editbook_showcomponent:false
})
}


editbook(id){
    this.setState({
        editbook_showcomponent:true,
        addbook_showcomponent: false,
        editbook_id:id
    });

    console.log(this.state.editbook_id);
}


// updating book detail 
editstate(id1,name1,author1,publisher1, price1){

  let book= {
       id:id1,
       name:name1,
       author:author1,
        publisher: publisher1,
       price:price1
      }

 var newbooks = this.state.books.slice();

    var index = newbooks.map(function(d){
            return d.id;
        }).indexOf(book.id);

    if (index !== -1) {
           newbooks[index] = book;

    this.setState({books: newbooks,
        editbook_showcomponent: false
    });
}
}


// delete books from state 
deletebook(index){
   var book = this.state.books;
   book.splice(index, 1);
   this.setState({ books: book });
}


   render() {
      return (
         <div>
            <table id="books">
               <tbody>
                <tr>
                <th>  Name </th>
                <th>  Author </th>
                <th>  Publisher </th>
                <th>  Price </th>

                </tr>
                  {this.state.books.map((book, i) => 
                    <tr>
                      <td>{book.name}</td>
                      <td>{book.author}</td>
                      <td>{book.publisher}</td>
                      <td>{book.price }</td>

                      <td> <a onClick= {  ()=>this.editbook(book.id) } class="btn btn-xs btn-primary">Edit</a></td>
                      <td> <a onClick= { ()=> this.deletebook(i) } class="btn btn-xs btn-danger">Delete</a></td>
                     </tr>
                     )}
               </tbody>
            </table>
            <br />
            <a onClick={ this.addbook } class="btn btn-xs btn-primary">Add Book</a>

             {this.state.addbook_showcomponent ? <Addbookform    updateStateProp = {this.updatestate } /> :null}
             {this.state.editbook_showcomponent ? <Editbookform  editbookprop = {this.editstate }  viewstate={this.state}/> :null}
            
         </div>
      );
   }
}


export default Allbooks;