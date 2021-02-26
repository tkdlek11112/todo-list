import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components';
import DevMenu from "./components/DevMenu";
import ScreenSelector from "./components/ScreenSelector";
import LoginProvider from "./LoginContext";
import Footer from "./components/Footer";


const GlobalStyle = createGlobalStyle`
    body{
        background: #282c34;
        margin: 0;
        padding: 0;
    }
`;

const Wrapper = styled.div`
    position:relative;
`;

const PlayGround = styled.div`
    background: gray;
    padding: 20px;
    min-height: 400px;
`;


function App(){
    const [screen, setScreen] = useState(0)

    return(
        <Wrapper>
            <DevMenu setScreen={setScreen}/>
            <GlobalStyle/>
            <LoginProvider>
                <PlayGround>
                    <ScreenSelector screen={screen} />
                </PlayGround>
                <Footer screen={screen}></Footer>

            </LoginProvider>
        </Wrapper>
    );
}

export default App;
