import React from 'react';

const AppContext = React.createContext();


const AppProvider = AppContext.Provider;

const withContext = (Component) => {
    return (props) => (
    <AppContext.Consumer>
        {context => (
            <Component {...props} context={context} />
        )}
    </AppContext.Consumer>);
};

export { AppContext, AppProvider, withContext };
