import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './Home'
// import BooksContainer from './BooksContainer';
import BookList from './BookList';

import BookForm from './BookForm';

const Router =() => {
    return (
       <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/books/new' component={BookForm} />
            <Route exact path='/books' component={BookList} />
       </Switch>
    );
};


export default Router