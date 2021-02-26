import React from 'react';
import styled from 'styled-components';
import {getTodos} from "../../api";
import {useAsync} from "react-async";
import {TodoItem,TodoItem2} from "../TodoItem";
import {useTodoState} from "../../TodoContext";

const TodoListBlock = styled.div`
    padding: 20px;
`;

function TodoListSp2(){
    const todos = useTodoState()
    return (
        <TodoListBlock>
            {todos.map(todo =>
                (<TodoItem2 userId={todo.userId} key={todo.id} id={todo.id} name={todo.name} done={todo.done} />
                ))}
        </TodoListBlock>
    );
}

export default TodoListSp2;