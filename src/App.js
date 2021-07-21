import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import BookForm from './components/BookForm'
import BooksContainer from './components/BooksContainer'
// mount different things from the components onto here
import Router from './components/Router'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function App() {
    return (
      
        <div>
            <Header/>
            <br></br>
            <Navbar/>
            <br></br>
            <BooksContainer/>
            <br></br>
            <br></br>
            <Router/>
            <Footer/>
        </div>
    )
}
