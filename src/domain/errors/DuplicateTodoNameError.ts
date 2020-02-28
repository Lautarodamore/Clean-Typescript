export class DuplicateTodoNameError extends Error {
    constructor(errorName: string){
        super(errorName);
    }
}