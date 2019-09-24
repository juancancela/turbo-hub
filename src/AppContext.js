import React, { useState } from 'react';
const AppContext = React.createContext([{}, () => { }]);

const AppProvider = props => {
    const [state, setState] = useState({ selectedNavigationItem: null, currentPage: null });
    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
