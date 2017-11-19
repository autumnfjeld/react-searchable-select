import React, { Component } from 'react';
import SearchSelectContainer from './SearchSelectContainer';

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
                    <p> I love react apps and other babbling </p>
                </div>
            </div>
    );
  }
}

export default App;
