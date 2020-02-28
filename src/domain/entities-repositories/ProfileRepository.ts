import { Profile } from "../entities/Profile";

export interface ProfileRepository {
    add(profile: Profile): void;
    find(username: string): Profile;
}