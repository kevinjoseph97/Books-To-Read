// here are all the actions pretaining to book... fetch/add/delete
// create action and head over to reducer
// the cases we made in book reducer must match the action type... 


// fetch
export const fetchBooks = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/books")
        .then(response => response.json())
       
        // its dispatching an action with data we just got to the reducer and find it
        .then(books =>  dispatch({type: 'GET_BOOKS', payload: books}))
    
    }
}


// remember to create another case for add_book
export const addBook = book => {
   return dispatch => {
    fetch("http://localhost:3000/books", {
        method: 'POST',
        body: JSON.stringify(book),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(book => dispatch({type: "ADD_BOOK", payload: book}) )
   }
}

export const removeBook = bookID => {
    return(dispatch) => {
        fetch(`http://localhost:3000/books/${bookID}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(book => {
            dispatch({ type: "REMOVE_BOOK", payload: book.id })
        })
    }
}