import React, {useState, createContext, useContext} from 'react';

const userIdContext = createContext();
const setUserIdContext = createContext();
const passwordContext = createContext();
const setPasswordContext = createContext();

function LoginProvider({children}){
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    return (
        <userIdContext.Provider value={userId}>
            <setUserIdContext.Provider value={setUserId}>
                <passwordContext.Provider value={password}>
                    <setPasswordContext.Provider value={setPassword}>
                        {children}
                    </setPasswordContext.Provider>
                </passwordContext.Provider>
            </setUserIdContext.Provider>
        </userIdContext.Provider>
    );
}

export default LoginProvider;

export function useUserIdProvider(){
    return useContext(userIdContext);
}

export function useSetUserIdContext(){
    return useContext(setUserIdContext);
}

export function usePasswordContext(){
    return useContext(passwordContext);
}

export function useSetPasswordContext(){
    return useContext(setPasswordContext);
}