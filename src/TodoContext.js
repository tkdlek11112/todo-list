import React, {useReducer, createContext, useContext, useRef} from 'react';

const initialTodos = [
    {
        id: 1,
        name: "1. 스피킹 맥스 하루 학습 100% 채우기",
        done: false,
        userId: "mychew"
    },
    {
        id: 2,
        name: "2. 운동아무거나하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 3,
        name: "3. 해리포터 책 읽기",
        done: false,
        userId: "mychew"
    },
    {
        id: 4,
        name: "4. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 5,
        name: "5. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 6,
        name: "6. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 7,
        name: "7. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 8,
        name: "8. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 9,
        name: "9. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 10,
        name: "10. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 11,
        name: "11. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 12,
        name: "12. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 13,
        name: "13. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 14,
        name: "14. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 15,
        name: "15. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 16,
        name: "16. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 17,
        name: "17. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 18,
        name: "18. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 19,
        name: "19. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 20,
        name: "20. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 21,
        name: "21. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 22,
        name: "22. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 23,
        name: "23. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 24,
        name: "24. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 25,
        name: "25. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
    },
    {
        id: 26,
        name: "26. 이마트에서 생수 주문하기",
        done: false,
        userId: "mychew"
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
        case 'REPLACE':
            return action.todos;
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