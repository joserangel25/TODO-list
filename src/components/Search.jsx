import React, { useState } from 'react';

const Search = ( {searchValue, setSearchValue } ) => {

    // const [searchValue, setSearchValue] = useState("");

    const usserFiltro = (e) => {
        // console.log(e.target.value);
        setSearchValue(e.target.value);
    }
    return (
        <div>
            <input type='text' placeholder='Filtrar' value={searchValue} onChange={usserFiltro}></input>
            
        </div>
    );
}

export default Search;