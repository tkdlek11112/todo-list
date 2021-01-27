import React from 'react';
import styled from 'styled-components';
import TodoItem from "../TodoItem";
import {getTodos} from "../../api";
import {useAsync} from "react-async";

const TodoListBlock = styled.div`
    padding: 20px;
`;

function TodoListSp1(){

    return (
        <TodoListBlock>
            <TodoItem name="영어공부하기" done={true}/>
            <TodoItem name="책읽기" done={false}/>
            <TodoItem name="블로그 쓰기" done={false}/>
            <TodoItem name="이마트에서 생수 주문하기" done={false}/>
            <TodoItem name="유튜브 동영상 올리기" done={false}/>
            <TodoItem name="강의자료 만들기" done={false}/>
        </TodoListBlock>
    );
}

export default TodoListSp1;