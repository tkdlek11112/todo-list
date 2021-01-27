import React from 'react';
import styled from "styled-components";
import {useTodoState} from "../TodoContext";

const TodoHeadTitle = styled.p`
    padding: 32px 20px 0 20px;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0;
`

const TodoHeadContent = styled.p`
    padding: 4px 20px;
    font-size:1rem;
    color: gray;
    margin: 0 0;

`

const TodoHeadCount = styled.p`
    padding: 20px;
    font-size: 1rem;
    font-weight: bold;
    color: mediumseagreen;
    margin: 0 0;
    border-bottom: 1px solid lightgray;
`


function TodoHead(){
    const todos = useTodoState()
    console.log(todos);

    const today = new Date();
    const dataString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {weekday:'long'});
    return (
        <>
            <TodoHeadTitle> {dataString} </TodoHeadTitle>
            <TodoHeadContent> {dayName} </TodoHeadContent>
            <TodoHeadCount>할 일 {todos.filter(todo => todo.done === false).length}개 남음</TodoHeadCount>
        </>
    );
}

export default TodoHead;