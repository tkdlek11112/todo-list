import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';
import {PostDeleteEx4, PostToggleEx4} from "../../api";
import {useTodoDispatchEx} from "./TodoContextEx";

const Remove = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 12px;
    cursor: pointer;
    &:hover {
    color: #ff6b6b;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
  position: relative;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
    flex: 1;
    font-size: 12px;
    color: #495057;
    max-width: 256px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Text2 = styled.div`
    flex: 0.5;
    font-size: 12px;
    font-weight: bold;
    color: orange;
    max-width: 128px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItemEx4({id, done, name,userId}){
    console.log(id, done, name)
    const dispatch = useTodoDispatchEx();
    const onToggle = () => {
        console.log('토글 누를때 id')
        console.log(id)
        const ret = PostToggleEx4({inputTodoId:id});
        ret.then(() => dispatch({type:'TOGGLE', id})
        );
    };
    const onRemove = () => {
        const ret = PostDeleteEx4({inputTodoId:id});
        ret.then(() => dispatch({type:'REMOVE', id}));
    };

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle} >{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{name}</Text>
            <Text2>{userId}</Text2>
            <Remove onClick={onRemove} >
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    )
}

export default React.memo(TodoItemEx4);
// export default TodoItemEx;