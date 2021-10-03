import logo from './logo.svg';
import './App.css';
import { SearchBar , Filters , Map , SearchResult } from './views'

function App() {
  
  return (
    <div className="App">
      <header className='App-header'>
        <img className='yelp-logo' src='assests/images/yelp-logo.png'/>
        <div className="App-search-bar-container">
            <SearchBar />
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
      <aside className="App-sidebar-left"><Filters /></aside>
      <section className="App-search-result-section">
       <SearchResult />
      </section>
      <aside className="App-sidebar-right"><Map /></aside>
      </main>
      
    </div>
  );
}

export default App;
