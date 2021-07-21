// local state here .. react likes controlled comps... value of input field are controlled by state
// comp state and only here to this comp

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/booksAction';


class BookForm extends Component {

    state = {
        title: '',
        author: '',
        image: ''
    }


    onChangeHandler = (e)=> {
        console.log(e.target.name, ':::', e.target.value)
        // name is the certain attribute looking for and value is whatever the user is typing in
        this.setState({[e.target.name]: e.target.value} )
    }


    // this has to call an action that will dispatch a new object to our reducer so we can update our store state 
    submitHandler = (e)=>{
        e.preventDefault() 
        console.log(e.target.value)
        this.props.addBook( this.state )
        // clears out form after submitting
        this.setState({
            title: '',
          author: '',
          image: ''
          });
        
    }



    render() {
        return (
            <div>
                <h1>Add A Book:</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={this.state.title} onChange={this.onChangeHandler} name="title" placeholder="Title"/>

                    <br></br>

                    {/* value is for state / name is for where it submits */}
                    <input type="text" value={this.state.author} onChange={this.onChangeHandler} name="author" placeholder="Author"/>

                    <br></br>

                    {/* set up image src */}
                    <input type="text" value={this.state.image} onChange={this.onChangeHandler} name="image" placeholder="Image URL"/>

                    <br></br>

                    <input type="submit" value="ADD THIS BOOK NOW"/>

                </form>

            </div>
        )
    }
}

export default connect(null, {addBook})(BookForm)
