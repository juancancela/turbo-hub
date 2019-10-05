import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { getPageData } from 'utils/config';
import Header from '../components/Header/Header';

export default function MainPage() {
    const [state, setState] = useContext(AppContext);
    const pageData = getPageData('/');
    const headerItems = pageData.mainComponent.properties.get('items');
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                setState(state => ({ ...state, users }));
            });
    }, []);

    return (
        <div>
            <Header items={headerItems}></Header>
            <div>{JSON.stringify(pageData)}</div>
            <div>datos!!!!</div>
            <div>datos!!!!</div>
            <div>datos!!!!</div>
            <div>datos!!!!</div>
            <div>datos!!!!</div>
            <div>datos!!!!</div>
            <div>datos!!!!</div>
            {
                state.users &&
                <div>{JSON.stringify(state.users)}</div>
            }
        </div>
    );
}