import { MongooseUsersRepository } from "../../repositories/mongoose-users-repository.js";
import { CreateUserUseCase } from "../create-user-use-case.js";

export function makeCreateUserUseCase() {
    const usersRepository = new MongooseUsersRepository();
    return new CreateUserUseCase(usersRepository);
}