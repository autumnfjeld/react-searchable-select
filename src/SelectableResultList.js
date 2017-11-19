import React from 'react';

/**
 * A stateless component
 * @param {Object} props - props object passed from declaration in SearchSelectContainer
 */
function SelectableResultList(props) {
    // console.log('SearchResultsList-1 props', props);
    if (props.characterList) {
        return  <div>
        			<p> This is the list </p>
                    <ul>
                        {props.characterList.map((c, id) => (
                            <li key={id}>{c.name}</li>
                        ))}
                    </ul>
                </div>
    } else {
        return null;
    }
}

export default SelectableResultList;