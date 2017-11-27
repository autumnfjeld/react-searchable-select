import React, { Component } from 'react';
import MarvelBrand from './MarvelBrand';
import SearchSelectContainer from './SearchSelectContainer';
import './app.css';

// TODO: move footer into own component

class App extends Component {
    render() {
      return (
            <div className='app-container'>
                <header>
                    <MarvelBrand />
                    <SearchSelectContainer />
                </header> 
                <div className='app-content'>
                </div>
                <footer>
                        <p > This app was developed for learning the 
                            <a href='https://reactjs.org/' > React Framework </a> 
                            and is not associated with Marvel Brand.  MarvelBrand sourced from 
                            <a href='https://commons.wikimedia.org/wiki/File:MarvelLogo.svg'>Wikimedia Commons </a>
                        </p>
                        <p> Built by <a href='http://autumnfjeld.com'> Autumn Fjeld </a> </p>
                </footer>
            </div>
    );
  }
}

export default App;
