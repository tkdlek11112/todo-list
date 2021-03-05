import axios from "axios";


export async function getTodos(){
    const response = await axios.post(
        'http://localhost:8000/todo/select');
    return response.data.tasks;
}

export async function getTodosWithId(inputUserId, inputPageNumber){
    const response = await axios.post(
        'http://localhost:8000/todo/select', {
            user_id:inputUserId,
            page_number:inputPageNumber
        });
    return response.data;
}

export async function createTodo(){

}

// 두버째 인자로 들어온다?
export async function PostLogin({user}, {inputUserId, inputPassword}){
    const response = await axios.post(
        'http://localhost:8000/login/app_login',{
            user_id:inputUserId,
            user_pw:inputPassword
        });

    return response.data;
}

export async function PostJoin({inputUserId, inputPassword}){
    const response = await axios.post(
        'http://localhost:8000/login/regist_user',{
            user_id:inputUserId,
            user_pw:inputPassword
        });
    console.log(response);
    return response.data;
}

export async function PostToggle({inputTodoId}){
    console.log('날리기전 id');
    console.log(inputTodoId);
    const response = await axios.post(
        'http://localhost:8000/todo/toggle',{
            todo_id:inputTodoId
        });
    console.log(response);
    return response.data;
}

export async function PostCreate({inputTodoId, inputName}){
    console.log('날리기전 id');
    console.log(inputTodoId);
    const response = await axios.post(
        'http://localhost:8000/todo/create',{
            user_id:'mychew',
            todo_id:inputTodoId,
            name:inputName
        });
    console.log(response);
    return response.data;
}


export async function PostCreateEx3(inputUserId, inputName){
    const response = await axios.post(
        'http://localhost:8000/todo/create',{
            user_id:inputUserId,
            name:inputName
        });
    return response.data;
}

export async function PostDelete({inputTodoId}){
    console.log('날리기전 id');
    console.log(inputTodoId);
    const response = await axios.post(
        'http://localhost:8000/todo/delete',{
            todo_id:inputTodoId
        });
    console.log(response);
    return response.data;
}