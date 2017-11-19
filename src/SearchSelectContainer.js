import React, { Component } from 'react';
import axios from 'axios';
import CharacterInput from './CharacterInput';
import SelectableResultList from './SelectableResultList';


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

    /**
     * A React lifecycle method that fires after the component is updated. Required to capture the correct state 
     * in the component lifecycle after component updates.  Good place for network requests by comparing current 
     * props/state to previous props/state
     * @param  {Object} prevProps - placeholder, not used
     * @param  {Object} prevState - the previous component state before component update
     */
    componentDidUpdate(prevProps, prevState) {
        // TODO: if network connection is slow, handle timing....waste to fetch initial typing, wait for pause or ?
        if (prevState.characterName !== this.state.characterName) {
            getCharacterList();
        }
    }	

    /** 
     * Callback for CharacterInput <input>'s on'
     */
	handleCharacterNameChange(characterName) {
	   	this.setState({'characterName': characterName});
	}  

	/**
	 * Calls the proxy server set up in api/index.js and sets state.characterList
	 */
    getCharacterList() {
    	// TODO: figure out better way to handle this = self
        var self = this;
        const url = 'http://localhost:1111/characters?nameStartsWith=' + this.state.characterName;
        // TODO: look into axios.CancelToken
        this.serverRequest = axios.get(url)
                .then(res => {
                    const characterList = res.data.results;
                    self.setState({characterList});
                });        
    } 	

    render() {
		const characterName = this.state.characterName;
		const characterList = this.state.characterList;
        return (
        	<div className='search-select-container'>
	            <CharacterInput 
	                characterName={characterName} 
	                handleChange={this.handleCharacterNameChange}
	            />
	            <SelectableResultList 
	            	characterList={characterList}
	            />
        	</div>
        )
    };	

}

export default SearchSelectContainer;