import React, {useState} from 'react'
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";
import TodoListEx1 from "./components/example/TodoListEx1";
import DevMenu from "./components/DevMenu";
import ScreenSelector from "./components/ScreenSelector";
import LoginProvider from "./LoginContext";
import Login from "./components/Login";

const GlobalStyle = createGlobalStyle`
    body {
        background: gray;
    }
`;


function App(){
    const [screen, setScreen] = useState(0)

    return(
        <LoginProvider>
            <DevMenu setScreen={setScreen}/>
            <GlobalStyle/>
            <Login></Login>

            <TodoTemplate>

                {/*<TodoHead></TodoHead>*/}
                <ScreenSelector screen={screen} />
                {/*<TodoCreate/>*/}
            </TodoTemplate>
        </LoginProvider>
    );
}

export default App;
