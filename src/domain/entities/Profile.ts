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

    public getTodo(todoName: string): Todo {
        return this.todos.filter(todo => todo.name == todoName)[0];
    }

    public addTodo(todo: Todo): void{
        this.todos.push(todo);
    }

    public subtractTodo(index: number): void {
        this.todos.splice(index, 1);
    }

    public editTodo(oldTodo: Todo, newTodo: Todo): void {
        this.todos.filter(todo => {
            if (todo.name = oldTodo.name) {
                todo.name = newTodo.name;
                todo.duration = newTodo.duration;
            }
        });
    }
}