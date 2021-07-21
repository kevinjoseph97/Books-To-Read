import React from 'react'
import { NavLink } from 'react-router-dom'



function Navbar() {

    return (
        <div>
            <div>
             <h5>Use The Links Below to Navigate </h5>
             <NavLink to="/" >HomePage</NavLink>
             <br></br>
             <NavLink to='/books/new'>ADD BOOK</NavLink>
             <br></br>
             <NavLink to="/books">ALL BOOKS</NavLink>
        </div>
        </div>
    )

   
        
}

export default Navbar











