import { ProfileRepositoryInMemory } from "../src/domain/entities-repositories/ProfileRepositoryInMemory";
import { Profile } from "../src/domain/entities/Profile";
import { Todo } from "../src/domain/entities/Todo";
import { EditTodo } from "../src/usecases/EditTodo";

describe('EditTodo Should', () => {
    test('edit a todo when new todo is given ', () => {
        const userNameProfile = "lautidamo";
        const newTodo = new Todo("Nombre nuevo", 5);
        const oldTodo = new Todo("Nombre viejo", 3);
        const profiles = new ProfileRepositoryInMemory();
        const profile = new Profile(userNameProfile, [oldTodo]);
        profiles.add(profile);
        const editTodo = new EditTodo(profiles);  

        editTodo.execute(userNameProfile, oldTodo, newTodo);

        expect(profile.getTodo(newTodo.name)).toStrictEqual(newTodo);
    })

});