import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './SimpleNavigationItem.css';

export default function SimpleNavigationItem({ item }) {
    const [state, setState] = useContext(AppContext);
    return (
        <Link to={item.href} key={JSON.stringify(item)}
            className={`nav-item ${state.selectedNavigationItem === item.value ? 'nav-item-selected' : ''}`}
            style={item.styles}
            onClick={() => {
                setState(state => ({ ...state, selectedNavigationItem: item.value }));
            }
            }>{item.value}
        </Link>
    );
}