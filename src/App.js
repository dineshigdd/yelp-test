import logo from './logo.svg';
import './App.css';
import { SearchBar , Filters , Map , SearchResult } from './views'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

function App() {
 const [state, setstate] = useState(true);
 const [btnState, setBtnstate] = useState(true);
 

 const displaySections = (component)=>{
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
      const searachReasult = [0,1,2]
      setstate(<aside className="App-sidebar-right">{ searachReasult.map( element=> <SearchResult />)}</aside>);     
      // setBtnstate( false )
   }


    if( btnState ){
       
    }
    else{
        setstate(null);
        document.getElementById('filter-button').textContent = 'Filters';
        setBtnstate( true );
    }
    


 }
 
  return (
    <div className="App">
      <header className='App-header'>
        <div className="mobile-menu-icon"><MenuIcon /></div>

        <div className="App-logo-and-menu-container">             
               <img className='yelp-logo' src='assests/images/yelp-logo.png'/>                                
        </div>
     
        <div className="App-search-bar-container">
            <SearchBar />
        </div>

        <div className="mobile-filter-list-map-links">
              <div>
                 <button id="filter-button" onClick={ ()=>displaySections('filters') }>Filters</button>
              </div>
              <div>
              <button id="list-button" onClick={ ()=>displaySections() }>List</button>
              <button id="map-button" onClick={ ()=>displaySections('map') }>Map</button>      
              </div>
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
      { state }
     
      </main>
      
    </div>
  );
}

export default App;
