import React from 'react';
import TodoListEx1 from "./example/TodoListEx1";
import TodoListSp1 from "./sample/TodoListSp1";
import TodoListSp2 from "./sample/TodoListSp2";
import TodoListSp3 from "./sample/TodoListSp3";
import TodoListSp4 from "./sample/TodoListSp4";
import LoginEx from "./example/LoginEx";
import LoginSp from "./sample/LoginSp";
import TodoTemplate from "./TodoTemplate";
import styled from 'styled-components';
import TodoCreate from "./TodoCreate";
import {TodoProvider} from "../TodoContext";
import {TodoProviderEx} from "./example/TodoContextEx";
import TodoCreateEx from "./example/TodoCreateEx";
import NotReady from "./NotReady";
import TodoListEx3 from "./example/TodoListEx3";
import TodoCreateEx3 from "./example/TodoCreateEx3";
import TodoTemplateWide from "./TodoTemplateWide";
import TodoListEx4 from "./example/TodoListEx4";
import TodoCreateEx4 from "./example/TodoCreateEx4";


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
            return (
                <TodoProvider>
                    <LoginSp></LoginSp>
                    <TodoTemplate>
                        <TodoListSp3/>
                        <TodoCreate/>
                    </TodoTemplate>
                </TodoProvider>
            );
        case 103:
            return (
                <TodoProviderEx>
                    <LoginEx></LoginEx>
                    <TodoTemplate>
                        <TodoListEx3/>
                        <TodoCreateEx3/>
                    </TodoTemplate>
                </TodoProviderEx>
            );
        case 4:
            return (
                <TodoProvider>
                    <LoginSp></LoginSp>
                    <TodoTemplateWide>
                        <TodoListSp4 />
                        <TodoCreate />
                    </TodoTemplateWide>
                </TodoProvider>
            );
        case 104:
            return (
                <TodoProviderEx>
                    <LoginEx></LoginEx>
                    <TodoTemplate>
                        <TodoListEx4/>
                        <TodoCreateEx4/>
                    </TodoTemplate>
                </TodoProviderEx>
            );
        case 5:
        case 105:
            return(
                <NotReady/>
            )
    }
}

export default ScreenSelector;