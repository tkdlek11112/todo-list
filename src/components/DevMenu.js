import React from 'react';
import styled from "styled-components";
import Button from "./Button";

const DevDivMenu = styled.p`
`;

const HeaderDiv = styled.div`
    background: #282c34;
    height: 120px;
    border-bottom: black solid 1px;
    border-top: black solid 1px;
`;


function DevMenu({screen, setScreen}){
    return(
        <HeaderDiv>
            <DevDivMenu>
                <Button color="blue" size="medium" outline setScreen={setScreen} screenId={1}>예제 1</Button>
                <Button color="blue" size="medium" outline setScreen={setScreen} screenId={2}>예제 2</Button>
                <Button color="blue" size="medium" outline setScreen={setScreen} screenId={3}>예제 3</Button>
                <Button color="blue" size="medium" outline setScreen={setScreen} screenId={4}>예제 4</Button>
                <Button color="blue" size="medium" outline setScreen={setScreen} screenId={5}>예제 5</Button>
            </DevDivMenu>
            <DevDivMenu>
                <Button color="purple" size="medium" outline setScreen={setScreen} screenId={101}>실습 1</Button>
                <Button color="purple" size="medium" outline setScreen={setScreen} screenId={102}>실습 2</Button>
                <Button color="purple" size="medium" outline setScreen={setScreen} screenId={103}>실습 3</Button>
                <Button color="purple" size="medium" outline setScreen={setScreen} screenId={104}>실습 4</Button>
                <Button color="purple" size="medium" outline setScreen={setScreen} screenId={105}>실습 5</Button>
            </DevDivMenu>
            </HeaderDiv>
    )
}

export default DevMenu