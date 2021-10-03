import React from 'react'
import './Filters.css'

function Filters() {
     const numbers = [0,1,2,3];
     const suggestedItems = ["Open Now 11:32 AM","Find businesses that are open now","Yelp Delivery","Yelp Takeout"];
     
     let dollarSign='';
     const listItems = numbers.map( (numbers ) => {
         dollarSign = dollarSign.concat('$');
            
          return <li className='filter-items' key={ numbers.toString() }>{   dollarSign    }</li>
     
     })   
      

     const checkItems = suggestedItems.map( (suggestedItems) => <input type="checkbox" />  );   
 
    

    return (
        <div>
            <p className="filters-section-subheadings">Filters</p>
            <ul className='filter-items-container'>
               {listItems}
            </ul>
            <hr/>
            <p  className="filters-section-subheadings">Suggested</p>
            <ul className='suggested-items-container'>
              { checkItems }
            </ul>
            <p>See all</p>

            <p  className="filters-section-subheadings">Features</p>
              { checkItems }
        </div>
    )
}

export default Filters
