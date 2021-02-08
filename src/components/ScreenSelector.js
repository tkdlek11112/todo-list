import React from 'react';
import TodoListEx1 from "./example/TodoListEx1";
import TodoListSp1 from "./sample/TodoListSp1";
import LoginEx from "./example/LoginEx";
import LoginSp from "./sample/LoginSp";
import TodoTemplate from "./TodoTemplate";
import styled from 'styled-components';
import TodoCreate from "./TodoCreate";
import {TodoProvider} from "../TodoContext";
import {TodoProviderEx} from "./example/TodoContextEx";
import TodoCreateEx from "./example/TodoCreateEx";


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
        case 3 :
            return(
                <>
                    <LoginSp></LoginSp>
                    <TodoProvider>
                        <TodoTemplate>
                            <TodoListSp1/>
                        </TodoTemplate>
                    </TodoProvider>
                </>

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
        case 103:
            return (
                <>
                    <LoginEx></LoginEx>
                    <TodoTemplate>
                        <TodoListEx1/>
                    </TodoTemplate>
                </>

            );
    }
}

export default ScreenSelector;