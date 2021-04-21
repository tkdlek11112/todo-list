import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';
import {useTodoDispatch} from "../TodoContext";

const Remove = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
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
  font-size: 24px;
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
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Text2 = styled.div`
  flex: 0.5;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Text3 = styled.div`
    flex: 1;
    font-size: 12px;
    color: #495057;
    ${props =>
        props.done &&
        css`
            color: #ced4da;
        `}
`;

const Text4 = styled.div`
  flex: 0.5;
  font-size: 12px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;


const TodoItem = React.memo(function TodoItem({id, done, name}){
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type:'TOGGLE', id});
    const onRemove = () => dispatch({type:'REMOVE', id});

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle} >{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{name}</Text>
            <Remove onClick={onRemove} >
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    )
})


const TodoItem2 = React.memo(function TodoItem2({id, done, name, userId}){
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type:'TOGGLE', id});
    const onRemove = () => dispatch({type:'REMOVE', id});

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle} >{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{name}</Text>
            <Text2>[{userId}]</Text2>
            <Remove onClick={onRemove} >
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    )
})


const TodoItem3 = React.memo(function TodoItem3({id, done, name, userId}){
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type:'TOGGLE', id});
    const onRemove = () => dispatch({type:'REMOVE', id});

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle} >{done && <MdDone/>}</CheckCircle>
            <Text3 done={done}>{name}</Text3>
            <Text4>[{userId}]</Text4>
            <Remove onClick={onRemove} >
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    )
})

export {TodoItem, TodoItem2, TodoItem3};
