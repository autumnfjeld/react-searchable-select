import React, { Component } from 'react';
import CharacterInput from './CharacterInput';
import SelectableResultList from './SelectableResultList';
import testData from './__tests__/test-data.js'


/**
 * Class representing a component with input form and list
 * Holds state for children that share data
 * @extends React.Component
 */
class SearchSelectContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            characterName: '',
            characterList: []
        };

   		this.handleCharacterNameChange = this.handleCharacterNameChange.bind(this);        
    }	

	handleCharacterNameChange(characterName) {
	   	this.setState({'characterName': characterName});
	   	// Dummy action
	   	this.setState({'characterList': testData.results});
	}  

    render() {
		const characterName = this.state.characterName;
		const characterList = this.state.characterList;
        return (
        	<div>
	            <CharacterInput 
	                characterName={characterName} 
	                handleChange={this.handleCharacterNameChange}
	            />
	            <p> Test input change: {characterName} </p>
	            <SelectableResultList 
	            	characterList={characterList}
	            />
        	</div>
        )
    };	

}

export default SearchSelectContainer;