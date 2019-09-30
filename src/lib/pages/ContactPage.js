import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import './ContactPage.css';
import { AppContext } from '../context/AppContext';

export default function ContactPage() {
    const [state, setState] = useContext(AppContext);
    console.log('state => ', state);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                setState(state => ({ ...state, users }));
            });
    }, []);
    
    return (
        <div className="page">
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