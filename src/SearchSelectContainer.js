import React, { Component } from 'react';
import CharacterInput from './CharacterInput';

/**
 * Will hold state for children that share data
 */
class SearchSelectContainer extends Component {
    render() {
		const characterName = 'testData';
        return (
        	<div>
	            <CharacterInput 
	                characterName={characterName} 
	            />
        	</div>
        )
    };	

}

export default SearchSelectContainer;