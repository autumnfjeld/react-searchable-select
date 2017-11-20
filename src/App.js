import React, { Component } from 'react';
import SearchSelectContainer from './SearchSelectContainer';
import './app.css';

class App extends Component {
    render() {
      return (
            <div className='app-container'>
                <header className='app-header'>
                    <h1 className='app-title'>MARVEL</h1>
                    <div>
                        <SearchSelectContainer />
                    </div>
                </header> 
                <div className='app-content'>
                </div>
            </div>
    );
  }
}

export default App;
