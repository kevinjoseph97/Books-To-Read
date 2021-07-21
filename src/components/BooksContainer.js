import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchBooks} from '../actions/booksAction'



class BooksContainer extends Component {


    // invoking fetchbooks so it will render books
    componentDidMount() {
        this.props.fetchBooks()
    }




    render() {
        return (
            <div>
                
            </div>
        )
    }
}

// to get actions... throw in mapdispatch to props as the second arguement 
// so we can use fetchBooks in the container as a prop
export default connect(null, {fetchBooks}) (BooksContainer)
