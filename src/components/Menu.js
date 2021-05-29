import React from 'react'

import { Link } from 'gatsby'

const MenuItem = ({ item }) => {
    return (
        <div className="menu-item" id={`menu-item--${item.link}`}>
            <Link to={item.link}>
                <span className="menu-item__label">{item.label}</span>
            </Link>
        </div>
    )
}

const MenuColumn = ({ column }) => {
    return (
        <div className="menu-column" id={`menu-column--${column.columnName}`}>
            { column.items.map((item, index) => {
                return <MenuItem key={index} item={item}/>
            })
            }
        </div>
    )
}

const Menu = ({ menu }) => {
    return (
        <div className="menu">
            { menu.map((column, index) => {
                return <MenuColumn key={index} column={column}/>
            }) }
        </div>
    )
}

export default Menu