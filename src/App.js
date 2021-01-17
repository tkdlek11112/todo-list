import React from 'react'
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
    body {
        background: gray;
    }
`;


function App(){
    return(
        <>
            <GlobalStyle/>
            <div>안녕하세요.</div>
            <TodoTemplate>
                <TodoHead></TodoHead>
                <TodoList></TodoList>
                <TodoCreate/>
            </TodoTemplate>

        </>
    );
}

export default App
