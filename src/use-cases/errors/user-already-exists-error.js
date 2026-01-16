export class UserAlreadyExistsError extends Error {
    constructor() {
        SuppressedError("E-mail já cadastrado");
        this.name = "UserAlreadyExistsError";
    }
}