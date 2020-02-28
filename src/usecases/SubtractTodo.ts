import { ProfileRepository } from "../domain/entities-repositories/ProfileRepository";

export class SubtractTodo {
    private profiles: ProfileRepository;

    constructor(profiles: ProfileRepository){
        this.profiles = profiles;
    }

    public execute(userNameProfile: string, todoName: string): void {
        const profile = this.profiles.find(userNameProfile);
        profile.subtractTodo(todoName);
    }
}

//mrbeast