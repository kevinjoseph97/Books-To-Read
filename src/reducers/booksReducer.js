// reducer takes in intit state and action(object) for arguements
// inside the reducer we put the switch statements and check the action.type
// based on the type ... we get a action.payload which is data that is being passed 
export const booksReducer = (state= [], action) => {
    switch(action.type){
        // info coming from actions fetch book dispatch
        case 'GET_BOOKS':
            return action.payload
        case "ADD_BOOK":
            return[...state, action.payload]
        case "REMOVE_BOOK":
            let currentBooks = state.filter(book => book.id !== action.payload)
            return[...currentBooks]
        default:
            return state
    }
}
