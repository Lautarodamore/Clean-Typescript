import {Todo} from '../src/domain/entities/Todo';
import { Profile } from '../src/domain/entities/Profile';
import { ProfileRepositoryInMemory } from '../src/domain/entities-repositories/ProfileRepositoryInMemory';
import { AddTodo } from '../src/usecases/Addtodo';

describe('Addtodo Should', () => {
    const userNameProfile = "lautidamo";
    const profiles = new ProfileRepositoryInMemory();
    const profile = new Profile(userNameProfile, []);
    profiles.add(profile);
    const todo = new Todo("Todo test", 1);
    const addTodo = new AddTodo(profiles);

    test('add a todo when todo is given', () => {

        addTodo.execute(userNameProfile, todo);

        expect(profile.getTodos().length).toBeGreaterThanOrEqual(1);
    });

    test('throw DuplicateTodoNameError if todoname is duplicated', () => {

        expect(() => addTodo.execute(userNameProfile, todo)).toThrowError("The todo " + todo.name + " is duplicated! Choose another name");
    });
});