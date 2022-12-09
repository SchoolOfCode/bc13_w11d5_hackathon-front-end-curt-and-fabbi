import React from 'react'
import './listitem.css'
//state for the checkbox?

const ListItem = ({listItem}) => {
    return (
        <div className='listitem'>
            <li>{`${listItem.item}: `}</li>
            <label className="check" htmlFor="completed?">Completed(Y/N)</label>
            <input type="checkbox" id="completed?" className="check"></input>
        </div>
    )
}

export default ListItem