import React, {useEffect} from 'react';
import styled from 'styled-components';
import {getTodos} from "../../api";
import TodoItemEx from "./TodoItemEx";
import {useTodoDispatchEx, useTodoNextIdEx, useTodoStateEx} from "./TodoContextEx";

const TodoListBlock = styled.div`
    padding: 20px;
`;

function TodoListEx1(){
    const local_todos = useTodoStateEx();
    const dispatch = useTodoDispatchEx();
    const nextId = useTodoNextIdEx();
    const load = () =>{
        const ret = getTodos()
        ret.then((todos)=>{
            dispatch({type:'REPLACE', todos:todos});
            console.log('마지막');
            nextId.current = todos[todos.length-1].id+1;
            console.log(nextId.current);
        });
    }
    useEffect(() => load(),[]
    )

    return (
        <TodoListBlock>
            {local_todos.map(todo => (
                <TodoItemEx key={todo.id} id={todo.id} name={todo.name} done={todo.done}/>
            ))}
        </TodoListBlock>
    );
}

export default TodoListEx1;