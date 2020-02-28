import { ProfileRepository } from "../domain/entities-repositories/ProfileRepository";

export class SubtractTodo {
    private profiles: ProfileRepository;

    constructor(profiles: ProfileRepository){
        this.profiles = profiles;
    }

    public execute(userNameProfile: string, todoName: string): void {
        const profile = this.profiles.find(userNameProfile);
        const todos = profile.getTodos();

        const todo = todos.filter(todo => todo.name == todoName)[0];
        const index = todos.indexOf(todo);

        profile.subtractTodo(index);
    }
}

//mrbeast