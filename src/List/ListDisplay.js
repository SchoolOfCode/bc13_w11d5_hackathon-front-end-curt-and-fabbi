// list item display
// checkbox
// useContext hook used here

import React from 'react'
import ListItem from './ListItem';
import { useContext } from 'react';
import { listContext } from '../App';

const ListDisplay = () => {
    
    // Setting the context as list variable to be used in component.
    const list = useContext(listContext)

    // Maps over the list array to return a list item for each object.
    // Passes down entire object as props
    return (
        <div>
            <list>
                {list.map((listItem) => (
                    <ListItem
                        listItem={{...listItem}}
                        key={listItem.id}
                    />
                ))}
            </list>
        </div>

    )
}

export default ListDisplay;