import React from 'react';
import TodoListEx1 from "./example/TodoListEx1";
import TodoListSp1 from "./sample/TodoListSp1";
import TodoListSp2 from "./sample/TodoListSp2";
import TodoListSp3 from "./sample/TodoListSp3";
import LoginEx from "./example/LoginEx";
import LoginSp from "./sample/LoginSp";
import TodoTemplate from "./TodoTemplate";
import styled from 'styled-components';
import TodoCreate from "./TodoCreate";
import {TodoProvider} from "../TodoContext";
import {TodoProviderEx} from "./example/TodoContextEx";
import TodoCreateEx from "./example/TodoCreateEx";
import NotReady from "./NotReady";


function ScreenSelector({screen}){
    switch (screen){
        default :
        case 1 :
            return(
                <LoginSp></LoginSp>
            );
        case 2 :
            return(
                <TodoProvider>
                    <TodoTemplate>
                        <TodoListSp1/>
                        <TodoCreate/>
                    </TodoTemplate>
                </TodoProvider>
            );
        case 101:
            return (
                <LoginEx></LoginEx>
            );
        case 102:
            return (
                <TodoProviderEx>
                    <TodoTemplate>
                        <TodoListEx1/>
                        <TodoCreateEx/>
                    </TodoTemplate>
                </TodoProviderEx>
            );
        case 3:
        case 103:
            return (
                <TodoProvider>
                    <LoginSp></LoginSp>
                    <TodoTemplate>
                        <TodoListSp3/>
                        <TodoCreate/>
                    </TodoTemplate>
                </TodoProvider>
            );
        case 4:
        case 104:
        case 5:
        case 105:
            return(
                <NotReady/>
            )
    }
}

export default ScreenSelector;