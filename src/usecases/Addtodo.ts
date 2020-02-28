import { ProfileRepository } from "../domain/entities-repositories/ProfileRepository";
import { Todo } from "../domain/entities/Todo";
import { DuplicateTodoNameError } from "../domain/errors/DuplicateTodoNameError";
import { Profile } from "../domain/entities/Profile";

export class AddTodo {
    private profiles: ProfileRepository;

    constructor(profiles: ProfileRepository){
        this.profiles = profiles;
    }

    public execute(userNameProfile: string, todo: Todo): void {
        const profile = this.profiles.find(userNameProfile);

        if (this.duplicatedTodo(profile, todo.name)) {
            throw new DuplicateTodoNameError("The todo " + todo.name + " is duplicated! Choose another name");
        }
        
        profile.addTodo(todo);
    }

    duplicatedTodo(profile: Profile, todoName: string): boolean {
       
       return profile.getTodos().filter(todo => todo.name == todoName).length > 0;
    }
} 