import { Todo } from "../src/domain/entities/Todo";
import { Profile } from "../src/domain/entities/Profile";
import { ProfileRepositoryInMemory } from "../src/domain/entities-repositories/ProfileRepositoryInMemory";
import { SubtractTodo } from "../src/usecases/SubtractTodo";

describe('Subtract todo', () => {
    test('should ', () => {
        const userNameProfile = "lautidamo";
        const todoName = "Todo test"
        const profiles = new ProfileRepositoryInMemory();
        const profile = new Profile(userNameProfile, [new Todo(todoName, 1)]);
        profiles.add(profile);
        const subtractTodo = new SubtractTodo(profiles);   


        subtractTodo.execute(userNameProfile, todoName)

        expect(profile.getTodos().length).toBeLessThan(1);
    });
});