import { Profile } from "../entities/Profile";
import { ProfileRepository } from "./ProfileRepository";

export class ProfileRepositoryInMemory implements ProfileRepository {
    private profiles: Array<Profile> = [];

    public add(profile: Profile): void{
        this.profiles.push(profile);
    }

    public find(userName: string): Profile {
        return this.profiles.filter(profile => profile.getUserName() == userName)[0];
    }
}