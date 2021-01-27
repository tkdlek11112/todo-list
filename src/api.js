import axios from "axios";


export async function getTodos(){
    const response = await axios.post(
        'http://localhost:8000/todo/select');
    console.log('data');
    console.log(response.data.tasks);
    return response.data.tasks;
}

export async function createTodo(){

}