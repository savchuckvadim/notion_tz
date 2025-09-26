import { IPost } from "@/modules/entties/posts/type/posts.type";
import { ITodo } from "@/modules/entties/todos/type/todo.type";
import { IStatisticsState } from "../model/StatisticsSlice";

export const getStatistics = (

    posts: IPost[],
    todos: ITodo[],
): IStatisticsState => ({ posts: posts.length, todos: todos.length });

