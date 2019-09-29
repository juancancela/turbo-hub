import React, { useState } from 'react';
import './DropdownNavigationItem.css';

export default function DropdownNavigationItem({ item }) {
    const [showDropdownMenu, toggleShowDropdownMenu] = useState(false);
    return (
        <div className="dd-nav-item"
            style={item.styles}
            onClick={() => toggleShowDropdownMenu(!showDropdownMenu)}>
            <div>{item.value}</div>
            {
                showDropdownMenu &&
                <ul>
                    {
                        item.items.map(i => <li style={item.styles}>{i.value}</li>)
                    }
                </ul>
            }
        </div>
    );
}