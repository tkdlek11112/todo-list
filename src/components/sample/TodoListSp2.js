import React, {useEffect} from 'react';
import styled from 'styled-components';
import {getTodos} from "../../api";
import {useAsync} from "react-async";
import {TodoItem,TodoItem2} from "../TodoItem";
import {useTodoState} from "../../TodoContext";
import {useUserIdProvider} from "../../LoginContext";

const TodoListBlock = styled.div`
    padding: 20px;
`;

function TodoListSp2(){
    const todos = useTodoState()
    const userId = useUserIdProvider()
    return (
        <TodoListBlock>
            {todos.filter(todo => todo.userId === userId ).map(todo =>
                (<TodoItem2
                        userId={todo.userId}
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        done={todo.done}
                    />
                ))}
        </TodoListBlock>
    );
}

export default TodoListSp2;