import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {getTodos, getTodosWithId} from "../../api";
import {useTodoDispatchEx, useTodoNextIdEx, useTodoStateEx} from "./TodoContextEx";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa'
import {useUserIdProvider} from "../../LoginContext";
import TodoItemEx3 from "./TodoItemEx3";



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



function TodoListEx3(){
    const userId = useUserIdProvider()
    const local_todos = useTodoStateEx();
    const dispatch = useTodoDispatchEx();

    const [isLastPage, setIsLastPage] = useState(false);
    const [page, setPage] = useState(0)
    const [todoCount, setTodoCount] = useState(0)

    const load = () =>{
        const ret = getTodosWithId(userId, page);
        ret.then((data)=>{
            dispatch({type:'REPLACE', todos:data.tasks});
            setIsLastPage(data.is_last_page);
        });
    }
    useEffect(() => load(),
        [userId, todoCount, page]
    )

    useEffect(() => {
        setTodoCount(local_todos.length)
    },[local_todos])

    return (
        <>
            <TodoListBlock>
                {local_todos.map(todo => (
                    <TodoItemEx3
                        key={todo.id}
                        id={todo.id}
                        userId={todo.userId}
                        name={todo.name}
                        done={todo.done}/>
                ))}
            </TodoListBlock>
            <div>
                <FaArrowAltCircleLeft size={50} color="#38D9A9" onClick={() => movePrev(page, setPage)}>◁</FaArrowAltCircleLeft> <FaArrowAltCircleRight size={50} color="#38D9A9" onClick={() => moveNext(page, setPage, isLastPage)}>▷</FaArrowAltCircleRight>
            </div>
        </>
    );
}

export default TodoListEx3;