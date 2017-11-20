import React from 'react';

/**
 * A stateless component
 * @param {Object} props - props object passed from declaration in SearchSelectContainer
 */
function SelectableResultList(props) {
    if (props.characterList.length > 0) {
        return  <div className='result-list'>
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