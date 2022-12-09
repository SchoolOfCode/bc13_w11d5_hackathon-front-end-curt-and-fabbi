// list item display
// checkbox
// useContext hook used here

import React from 'react'
import ListItem from './ListItem';

const ListDisplay = ({list}) => {
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