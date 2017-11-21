import React from 'react';



/**
 * A stateless component for a single character
 * @param {Object} props object passed from SelectableResultList
 * TODO:  add character description under name
 */
function SelectListItem(props) {

    const c = props.character;
    const imgUrl = c.thumbnail.path + '.' + c.thumbnail.extension;

    function characterSelected(name) {
        console.log('characterSelected:', name);
    }

    return  <button className='btn-select' onClick={(e) => characterSelected(c.name)}>
                <div className='marvel-img-box'>
                    <img 
                        className='marvel-img' 
                        alt="TODOplaceholder"
                        src={imgUrl}
                    />
                </div>
                <div>
                     <div className='marvel-name'> {c.name} </div>
                </div>
            </button>
}

/**
 * A stateless component for list of characters
 * @param {Object} props - props object passed from declaration in SearchSelectContainer
 */
function SelectableResultList(props) {
    if (props.characterList && props.characterList.length > 0) {
        return  <div className='result-list-box'>
                    <div className='result-list-scroll'>
                        {props.characterList.map((c, id) => (
                            <SelectListItem key={id} character={c} />
                        ))}
                    </div>
                </div>
    } else {
        return null;
    }
}

export default SelectableResultList;