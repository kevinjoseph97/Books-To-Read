import React from 'react'


function SearchBar (props) {
    

    const onChangeHandler= (e) => {
        console.log(e.target.value)
        props.userSearching(e.target.value)
    }


        return (
            <div>
                <input type="text" value={props.userSearched} onChange={onChangeHandler} placeholder=""/>
            </div>
        )

}



export default SearchBar


