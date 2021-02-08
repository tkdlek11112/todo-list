import React from 'react';
import styled from 'styled-components';
import TodoItem from "../TodoItem";
import {getTodos} from "../../api";
import {useAsync} from "react-async";
import {useTodoState} from "../../TodoContext";

const TodoListBlock = styled.div`
    padding: 20px;
`;

function TodoListSp1(){
    const todos = useTodoState()
    return (
        <TodoListBlock>
            {todos.map(todo =>
                (<TodoItem key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
                ))}
        </TodoListBlock>
    );
}

export default TodoListSp1;