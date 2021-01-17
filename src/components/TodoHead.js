import React from 'react';
import styled from "styled-components";

const TodoHeadTitle = styled.p`
    padding: 32px 20px 0 20px;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0;
`

const TodoHeadContent = styled.p`
    padding: 4px 20px;
    font-size:1rem;
    color: gray;
    margin: 0 0;

`

const TodoHeadCount = styled.p`
    padding: 20px;
    font-size: 1rem;
    font-weight: bold;
    color: mediumseagreen;
    margin: 0 0;
    border-bottom: 1px solid lightgray;
`


function TodoHead(){
    return (
        <>
            <TodoHeadTitle> 2020년 1월 16일 </TodoHeadTitle>
            <TodoHeadContent> 토요일 </TodoHeadContent>
            <TodoHeadCount>할 일 4개 남음</TodoHeadCount>
        </>
    );
}

export default TodoHead