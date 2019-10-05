import React, { useState } from 'react';
import { serialize } from '../utils/config';
const app = serialize();
const AppContext = React.createContext([{}, () => { }]);

const AppProvider = props => {
    const [state, setState] = useState({ app, selectedNavigationItem: null, currentPage: null });
    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
