import React, {useState} from 'react';

const user = [{
    name: 'Tanmay',
    username: 'Tanmay3610',
    password: 'Tanmay',
}]


const loggedUserId = -1;

const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    const [loggedStatus, changeLoggedStatus] = useState(false);
    const [loggedUserId, changeLoggedUserID] = useState(-1);
    return (<UserContext.Provider value = {[user, changeLoggedStatus, loggedUserId, changeLoggedUserID]}>
                {children}
            </UserContext.Provider>);
}

export default UserContext;