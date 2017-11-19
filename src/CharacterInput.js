import React, { Component } from 'react';

/**
 * Class representing input form
 * @extends React.Component
 */
class CharacterInput extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(ev){
        this.props.handleChange(ev.target.value);
    }

    render() {
        const characterName = this.props.characterName;
        return (
	         <form>
	            <input 
	                type="text" 
	                value={characterName}
	                onChange={this.handleInputChange}
	                placeholder="Search"
	                autoFocus
	                className='character-search-input'
	            />
	        </form>
    	);
  	}
}

export default CharacterInput;