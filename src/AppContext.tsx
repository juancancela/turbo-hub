import React, { useState } from 'react';
const AppContext = React.createContext([{}, () => { }]);



const AppProvider = (props: any) => {
    const [state, setState] = useState({});
    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
