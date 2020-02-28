import { Todo } from "./Todo";

export class Profile {
    
    private username: string;
    private todos: Array<Todo>;

    constructor(username: string, todos: Array<Todo>){
        this.username = username;
        this.todos = todos;
    }

    public getUserName(): string{
        return this.username;
    }

    public getTodos(): Array<Todo> {
        return this.todos;
    }

    public addTodo(todo: Todo): void{
        this.todos.push(todo);
    }

    subtractTodo(index: number): void {
        this.todos.splice(index, 1);
    }
}