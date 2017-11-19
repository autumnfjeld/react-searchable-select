import React, { Component } from 'react';

/**
 * Will hold state for children that share data
 */
class CharacterInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const characterName = this.props.characterName;
        return (
	         <form>
	            <input 
	                type="text" 
	                value={characterName}
	                placeholder="Search"
	                autoFocus
	                className='character-search-input'
	            />
	        </form>
    	);
  	}
}

export default CharacterInput;