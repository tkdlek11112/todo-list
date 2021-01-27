import React, {useState, createContext} from 'react';


const userIdContext = createContext();
const setUserIdContext = createContext();

function LoginProvider({children}){
    const [userId, setUserId] = useState('');
    return (
        <userIdContext.Provider value={userId}>
            <setUserIdContext.Provider value={setUserId}>
                    {children}
            </setUserIdContext.Provider>
        </userIdContext.Provider>
    );
}

export default LoginProvider;