import React, { Component } from 'react';
import CharacterInput from './CharacterInput';



/**
 * Class representing a component with input form and list
 * Holds state for children that share data
 * @extends React.Component
 */
class SearchSelectContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            characterName: ''
        };
   		this.handleCharacterNameChange = this.handleCharacterNameChange.bind(this);        
    }	

	handleCharacterNameChange(characterName) {
	   	this.setState({'characterName': characterName});
	}  

    render() {
		const characterName = this.state.characterName;
        return (
        	<div>
	            <CharacterInput 
	                characterName={characterName} 
	                handleChange={this.handleCharacterNameChange}
	            />
	            <p> Test input change: {characterName} </p>
        	</div>
        )
    };	

}

export default SearchSelectContainer;