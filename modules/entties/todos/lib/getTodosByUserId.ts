import { ITodo } from "../type/todo.type";

export const getTodosByUserId = async (userId: number): Promise<ITodo[]> => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const todos = await res.json() as ITodo[];
    return todos;
}
