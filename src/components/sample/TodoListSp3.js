import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {TodoItem,TodoItem2} from "../TodoItem";
import {useTodoState} from "../../TodoContext";
import {useUserIdProvider} from "../../LoginContext";

const TodoListBlock = styled.div`
    padding: 20px;
`;

function TodoListSp3(){
    const todos = useTodoState()
    const userId = useUserIdProvider()

    const [page, setPage] = useState(0)
    const [pagedTodos, setPagedTodos] = useState(todos)
    useEffect(()=>{
        // 전체 수가 1페이지 이하일 때
        if(todos.length < 10){
            setPagedTodos(todos);
        }else{
            if(page + 10 > todos.length){
                setPagedTodos(todos.slice(page))
            }else{
                setPagedTodos(todos.slice(page, page + 10))

            }
        }
        console.log(pagedTodos)
        console.log(todos)
    }, [userId, todos])

    return (
        <>
            <TodoListBlock>
                {pagedTodos.filter(todo => todo.userId === userId ).map(todo =>
                    (<TodoItem2
                            userId={todo.userId}
                            key={todo.id}
                            id={todo.id}
                            name={todo.name}
                            done={todo.done}
                        />
                    ))}
            </TodoListBlock>
        </>

    );
}

export default TodoListSp3;