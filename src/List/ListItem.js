import React from 'react'
import './listitem.css'
//state for the checkbox?

const ListItem = ({listItem}) => {
    return (
        <div className='listitem'>
            <li>{listItem.item}</li>
            <input type="checkbox" id="completed?"></input>
            <label for="completed?">Completed(Y/N)</label>
        </div>
    )
}

export default ListItem