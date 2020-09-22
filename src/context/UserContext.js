import React from 'react';

const user = {
    name: 'Tanmay',
    username: 'Tanmay3610'
}

const loggedStatus = false;

const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    return (<UserContext.Provider value = {[user, loggedStatus]}>
                {children}
            </UserContext.Provider>);
}

export default UserContext;