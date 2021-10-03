import React from 'react';
import './SearchBar.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function SearchBar() {
    return (
        // <div>
            <div className="search-bar-outer-container">   
                <div className="search-bar-inner-container">
                    <input list="search-criteria" name="browser" className="search-criteria" id="search-criteria" placeholder="tacos, cheap dinner, Max's"/>
                    <datalist id="search-criteria">
                        <option value="Edge" />
                        <option value="Firefox" />
                        <option value="Chrome" />
                        <option value="Opera" />
                        <option value="Safari" />
                    </datalist>
                    <input className="location-input" type="text"></input>                    
                </div>    
                {/* <div className="search-icon-contianer"> */}
                    <SearchRoundedIcon className="search-icon" fontSize="large" />        
                {/* </div> */}
             </div>
             
        // </div>
    )
}

export default SearchBar
