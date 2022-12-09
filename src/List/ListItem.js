import React from 'react'

//state for the checkbox?

const ListItem = ({listItem}) => {
    return (
        <div>
            <li>{listItem.item}</li>
            <input type="checkbox" id="completed?" checked={false}></input>
            <label for="completed?">Completed?</label>
        </div>
    )
}

export default ListItem