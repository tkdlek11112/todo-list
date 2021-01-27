import React from 'react';
import styled from 'styled-components';
import TodoItem from "../TodoItem";
import {getTodos} from "../../api";
import {useAsync} from "react-async";

const TodoListBlock = styled.div`
    padding: 20px;
`;

function TodoListEx1(){
    const {data: todos, error, isLoading, reload} = useAsync({
        promiseFn: getTodos
    });
    console.log(todos);
    if (isLoading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!todos) return <button onClick={reload}>불러오기</button>;
    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
            ))}
        </TodoListBlock>
    );
}

export default TodoListEx1;