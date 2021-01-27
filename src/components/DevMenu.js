import React from 'react';
import styled from "styled-components";
import Button from "./Button";

const DevDivMenu = styled.p`
    height: 40px;
    border-bottom: 1px solid #282c34;
`;


function DevMenu({screen, setScreen}){
    return(
        <>
            <DevDivMenu>
                <Button color="gray" size="medium" setScreen={setScreen} screenId={1}>예제 1</Button>
                <Button color="gray" size="medium" setScreen={setScreen} screenId={2}>예제 2</Button>
                <Button color="gray" size="medium" setScreen={setScreen} screenId={3}>예제 3</Button>
                <Button color="gray" size="medium" setScreen={setScreen} screenId={4}>예제 4</Button>
                <Button color="gray" size="medium" setScreen={setScreen} screenId={5}>예제 5</Button>
            </DevDivMenu>
            <DevDivMenu>
                <Button color="purple" size="medium" setScreen={setScreen} screenId={101}>실습 1</Button>
                <Button color="purple" size="medium" setScreen={setScreen} screenId={102}>실습 2</Button>
                <Button color="purple" size="medium" setScreen={setScreen} screenId={103}>실습 3</Button>
                <Button color="purple" size="medium" setScreen={setScreen} screenId={104}>실습 4</Button>
                <Button color="purple" size="medium" setScreen={setScreen} screenId={105}>실습 5</Button>
            </DevDivMenu>
            </>
    )
}

export default DevMenu