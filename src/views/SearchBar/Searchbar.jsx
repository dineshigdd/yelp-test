import React, { useState } from 'react';
import './SearchBar.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function SearchBar() {
    const [ input , setInput] = useState();
    const [ button , setButton] = useState();
    
    const displayInputControls = ()=><input className="location-input" type="text"></input>;

    const displayButtonControls = ()=>{
        return (
        <>
            <div  onClick={()=>{ setButton(null);setInput( null)}} className="mobile-cancel-link"><a>Cancel</a></div>
            <SearchRoundedIcon className="search-icon" fontSize="large" />
       </>
        )
    }
    

    return (
        // <div>
            <div className="search-bar-outer-container">   
                <div className="search-bar-inner-container">
                    <input onClick={()=>{ setButton(displayButtonControls);setInput(displayInputControls)}} list="search-criteria" name="browser" className="search-criteria" id="search-criteria" placeholder="tacos, cheap dinner, Max's"/>
                    <datalist id="search-criteria">
                        <option value="Edge" />
                        <option value="Firefox" />
                        <option value="Chrome" />
                        <option value="Opera" />
                        <option value="Safari" />
                    </datalist>
                   { input }                  
                </div>    
               <div className="search-icon-contianer">
                     { button }           
                </div>              
             </div>

             
        // </div>
    )
}

export default SearchBar
