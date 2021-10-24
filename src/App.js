import logo from './logo.svg';
import './App.css';
import { SearchBar , Filters , Map , SearchResult } from './views'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function App() {
 const [state, setstate] = useState(true);
 const [btnState, setBtnstate] = useState(true);

 const [ logoMenuState , setLogoMenuState ] = useState(<>
  <img className='yelp-logo'/>          
  <MenuIcon className="mobile-menu-icon"/>
 </>);

 const [ isfilterListMapButtonState, setIsFilterListMapButtonState ] = useState(true);

 const filterListMapBar = (
            <div className="mobile-filter-list-map-links">
                          <div>
                            <button className="action-buttons" id="filter-button" onClick={ ()=>displaySections('filters') }>Filters</button>
                          </div>
                              <div>
                                  { (btnState) ? 
                                  <>
                                    <button className="action-buttons"  id="list-button" onClick={ ()=>displaySections('list') }>List</button> 
                                    <button className="action-buttons"  id="map-button" onClick={ ()=>displaySections('map') }>Map</button>
                                </>:
                                <><button className="action-buttons"  id="search-button" onClick={ ()=>displaySections("search") }>Search</button></>
                                }              
                                    
                              </div>
              </div> 
              );

 const [ filterListMapButtonState, setFilterListMapButtonState ] = useState(filterListMapBar);

 const displaySections = ( component )=>{
   switch(component){
     case 'filters':
      setstate(<div className="App-sidebar-left"><Filters /></div>);
      document.getElementById('filter-button').textContent = 'Cancel';    
      setBtnstate( false );

     break;

     case 'map':
     
      setstate( <section className="App-search-result-section"><Map /></section>);     
      // setBtnstate( false )
     break;

     default:
       //display list of search results
      const searchReasult = [0,1,2];
      setstate(<aside className="App-sidebar-right">{ searchReasult.map( e => <SearchResult /> ) }</aside>);     
      // setBtnstate( false )
   }


    if( !btnState ){
        setstate(null);
        document.getElementById('filter-button').textContent = 'Filters';
        setBtnstate( true );
    }

  

    } 
 
  return (
    <div className="App">
      <header className='App-header'>         
            <div className="App-logo-and-menu-container">           
                { logoMenuState }                                                 
        </div>
     
        <div className="App-search-bar-container">
            <SearchBar LogoMenuState={ setLogoMenuState } IsFilterListMapButtonState = { setIsFilterListMapButtonState }/>
            
        </div>

        
        
        <div className="App-header-right-corner">
          <div>
            <span><a>For Business</a></span>
            <span><a>Write a review</a></span>
          </div>
          <div>
            <span className="App-auth-link App-login-link"><a>Log in</a></span>
            <span className="App-auth-link App-signup-link"><a>Sign up</a></span>
          </div>
        </div>
      </header>

      <main className="App-main-section">
         
      { isfilterListMapButtonState ? filterListMapButtonState : '' }
           
      
        { state }
     
      </main>
      
    </div>
  );
}

export default App;
