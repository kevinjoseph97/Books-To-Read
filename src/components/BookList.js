import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeBook} from '../actions/booksAction'
import {Card, Button} from 'react-bootstrap'



import SearchBar from './SearchBar';


class BookList extends Component {

    constructor() {
        super();
           this.state = {
               searchedBook: ""
           } 
        
    }

    updateSearch= (newSearch) => {
        this.setState({
            searchedBook: newSearch
        })
    }

    renderFilteredBooks= () => {
        let lowerSearched = this.state.searchedBook.toLowerCase()
        let filteredBooks = this.props.books.filter(book => (
            book.title.toLowerCase().includes(lowerSearched)
            
        ))

      
        return(
           
            filteredBooks.map(book =>
               
                
                <Card className="text-center" style={{ width: '18rem'  }}> 
                <Card.Body key={book.id}>
                
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.author}</Card.Text>
                    <Card.Img src={book.image}/>
                    
                    <Button variant="danger" onClick={()=>removeBook(book.id)}>DELETE BOOK</Button>
                    <br></br>
                    <br></br>
                    <br></br>
                </Card.Body>
            </Card>
            
                   
               
            )

        )
    }
  

    render() {
      
       
    
        return (
            <div>
                <SearchBar userSearching={this.updateSearch} userSearched={this.state.searchedBook}/>
               { this.renderFilteredBooks()}
            </div>
    )
    }
   
}



const mapStateToProps = state => {
    return{
        books: state.books
    }

}


export default connect(mapStateToProps,{removeBook})(BookList)