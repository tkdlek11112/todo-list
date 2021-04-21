import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {TodoItem,TodoItem2,TodoItem3} from "../TodoItem";
import {useTodoState} from "../../TodoContext";
import {useUserIdProvider} from "../../LoginContext";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'


const TodoListBlock = styled.div`
    padding: 20px;
`;


function movePrev(page, setPage){
    if(page > 0) {
        setPage(page - 1)
    }
}

function moveNext(page, setPage, isLastPage){
    console.log("지금페이지 =" + page + "마지막페이지? =" + isLastPage);
    if(!isLastPage) {
        setPage(page + 1)
    }
}

function TodoListSp4(){
    const todos = useTodoState()
    const userId = useUserIdProvider()

    const [isLastPage, setIsLastPage] = useState(false);
    const [page, setPage] = useState(0)
    const [pagedTodos, setPagedTodos] = useState(todos)
    useEffect(()=>{
        // 전체 수가 1페이지 이하일 때
        if(todos.length < 10){
            setPagedTodos(todos);
            setIsLastPage(true);
        }else{
            if((1+page) * 10 > todos.length){
                setPagedTodos(todos.slice(page * 10))
                setIsLastPage(true);
            }else{
                setPagedTodos(todos.slice(page * 10, (1+page) * 10))
                setIsLastPage(false);
            }
        }
        console.log("isLastPage" + isLastPage);
        console.log(pagedTodos);
        console.log(todos);
    }, [userId, todos, page])

    return (
        <>
            <TodoListBlock>
                {pagedTodos.filter(todo => todo.userId === userId ).map(todo =>
                    (<TodoItem3
                            userId={todo.userId}
                            key={todo.id}
                            id={todo.id}
                            name={todo.name}
                            done={todo.done}
                        />
                    ))}
            </TodoListBlock>
            <div>
                <FaArrowAltCircleLeft size={50} color="#38D9A9" onClick={() => movePrev(page, setPage)}>◁</FaArrowAltCircleLeft> <FaArrowAltCircleRight size={50} color="#38D9A9" onClick={() => moveNext(page, setPage, isLastPage)}>▷</FaArrowAltCircleRight>
            </div>
        </>

    );
}

export default TodoListSp4;