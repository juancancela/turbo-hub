import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './SimpleNavigationItem.css';

export default function SimpleNavigationItem({ item }) {
    const [state, setState] = useContext(AppContext);
    return (
        <div key={JSON.stringify(item)}
            className="nav-item"
            style={item.styles}>{item.value}
        </div>
    );
}