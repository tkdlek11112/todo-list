import React from 'react';
import TodoListEx1 from "./example/TodoListEx1";
import TodoListSp1 from "./sample/TodoListSp1";

function ScreenSelector({screen}){
    switch (screen){
        default :
        case 1 :
            return(
                <TodoListSp1/>
            )
        case 101:
            return (
                <TodoListEx1/>
            )
    }
}

export default ScreenSelector;