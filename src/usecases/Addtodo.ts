import { ProfileRepository } from "../domain/entities-repositories/ProfileRepository";
import { Todo } from "../domain/entities/Todo";

export class AddTodo {
    private profiles: ProfileRepository;

    constructor(profiles: ProfileRepository){
        this.profiles = profiles;
    }

    public execute(userNameProfile: string, todo: Todo): void {
        const profile = this.profiles.find(userNameProfile);
        profile.addTodo(todo);
    }
} 