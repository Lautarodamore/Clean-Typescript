import { Todo } from "./Todo";

export class Profile {
    private username: string;
    private todos: Array<Todo>;

    constructor(username: string){
        this.username = username;
        this.todos = [];
    }

    public getUserName(): string{
        return this.username;
    }

    public getTodos(): Array<Todo> {
        return this.todos;
    }

    public addTodo(todo: Todo){
        this.todos.push(todo);
    }
}