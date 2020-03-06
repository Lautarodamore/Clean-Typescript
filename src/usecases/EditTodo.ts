import { ProfileRepository } from "../domain/entities-repositories/ProfileRepository";
import { Todo } from "../domain/entities/Todo";

export class EditTodo {
    profiles: ProfileRepository;

    constructor(profiles: ProfileRepository){
        this.profiles = profiles;
    }

    public execute(username: string, oldTodo: Todo ,newTodo: Todo){
        const profile = this.profiles.find(username);
        profile.editTodo(oldTodo, newTodo);
    }
}