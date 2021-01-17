import React from 'react';
import styled from 'styled-components';
import TodoItem from "./TodoItem";
import TodoTemplate from "./TodoTemplate";

const TodoListBlock = styled.div`
    padding: 20px;
`;

function TodoList(){
    return (
        <TodoListBlock>
            <TodoItem text="아침산책" done={true}></TodoItem>
            <TodoItem text="아침산책" ></TodoItem>
            <TodoItem text="아침산책"></TodoItem>
        </TodoListBlock>
    )
}

export default TodoList