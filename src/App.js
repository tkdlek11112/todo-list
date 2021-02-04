import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";
import TodoListEx1 from "./components/example/TodoListEx1";
import DevMenu from "./components/DevMenu";
import ScreenSelector from "./components/ScreenSelector";
import LoginProvider from "./LoginContext";
import Login from "./components/Login";
import Footer from "./components/Footer";


const GlobalStyle = createGlobalStyle`
    body{
        background: gray;
    }
`;

const PlayGround = styled.div`
    background: gray;

`;


function App(){
    const [screen, setScreen] = useState(0)

    return(
        <>
            <DevMenu setScreen={setScreen}/>
            <GlobalStyle/>
            <LoginProvider>
                <PlayGround>
                    <Login></Login>

                    {/*<TodoTemplate>*/}

                    {/*    /!*<TodoHead></TodoHead>*!/*/}
                    {/*    <ScreenSelector screen={screen} />*/}
                    {/*    /!*<TodoCreate/>*!/*/}
                    {/*</TodoTemplate>*/}
                </PlayGround>
                <Footer></Footer>

            </LoginProvider>
        </>
    );
}

export default App;
