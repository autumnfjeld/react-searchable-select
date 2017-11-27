import React, { Component } from 'react';
import MarvelBrand from './MarvelBrand';
import SearchSelectContainer from './SearchSelectContainer';
import './app.css';

// TODO: Create MarvelBrand component to hold svg 
// TODO: add source of marvel svg https://commons.wikimedia.org/wiki/File:MarvelLogo.svg and disclaimer of no association with marvel for http://react-searchselect.autumnfjeld.com/

class App extends Component {
    render() {
      return (
            <div className='app-container'>
                <header>
                    <MarvelBrand />
                    <SearchSelectContainer />
                </header> 
                <div className='app-content'>
                    <p className="disclaimer"> This app was developed for learning the 
                        <a src='https://reactjs.org/' > React Framework </a> 
                        and is not associated with Marvel Brand.  
                    </p>
                </div>
            </div>
    );
  }
}

export default App;
