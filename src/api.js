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
export async function getTodosWithHeaderId(inputUserId, inputPageNumber){
    const headers = {
        'id': inputUserId,
        'version': '1.1'
    }
    const response = await axios.post(
        'http://localhost:8000/todo/select', {
            user_id:inputUserId,
            page_number:inputPageNumber
        },{headers});
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
    const response = await axios.post(
        'http://localhost:8000/todo/toggle',{
            todo_id:inputTodoId
        });
    return response.data;
}

export async function PostToggleEx4({inputTodoId}){
    const headers = {
        'version': '1.1'
    }
    const response = await axios.post(
        'http://localhost:8000/todo/toggle',{
            todo_id:inputTodoId
        }, {headers});
    return response.data;
}

export async function PostCreate({inputTodoId, inputName}){
    const response = await axios.post(
        'http://localhost:8000/todo/create',{
            user_id:'mychew',
            todo_id:inputTodoId,
            name:inputName
        });
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


export async function PostCreateEx4(inputUserId, inputName){
    const headers = {
        'id': inputUserId,
        'version': '1.1'
    }
    const response = await axios.post(
//        'http://localhost:8000/todo/create',{
            'http://localhost:8000/todo/create',{
            user_id:inputUserId,
            name:inputName
        },{headers});
    return response.data;
}

export async function PostDelete({inputTodoId}){
    const response = await axios.post(
        'http://localhost:8000/todo/delete',{
            todo_id:inputTodoId
        });
    return response.data;
}

export async function PostDeleteEx4({inputTodoId}){
    const headers = {
        'version': '1.1'
    }
    const response = await axios.post(
        'http://localhost:8000/todo/delete',{
            todo_id:inputTodoId
        },{headers});
    return response.data;
}
