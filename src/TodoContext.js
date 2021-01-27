import React, {useReducer, createContext, useContext, useRef} from 'react';

const initialTodos = [
    {
        id: 1,
        name: "스피킹 맥스 하루 학습 100% 채우기",
        done: false
    },
    {
        id: 2,
        name: "운동아무거나하기",
        done: false
    },
    {
        id: 3,
        name: "해리포터 책 읽기",
        done: false
    },
    {
        id: 4,
        name: "스피킹 맥스 하루 학습 100% 채우기",
        done: false
    },
];

function todoReducer(state, action){
    switch (action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error('정의되지 않은 액션이 들어왔어욤');
    }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

export function useTodoState(){
    const context = useContext(TodoStateContext);
    if (!context){
        throw new Error('컨텍스트를 찾을 수 없습니다.')
    }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if (!context){
        throw new Error('컨텍스트를 찾을 수 없습니다.')
    }
    return context;
}

export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if (!context){
        throw new Error('컨텍스트를 찾을 수 없습니다.')
    }
    return context;
}