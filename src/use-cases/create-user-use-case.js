import { hash } from "bcryptjs";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error.js";

export class CreateUserUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async execute({ name, email, password, avatar_id = null }) {
        const userWithSameEmail = await this.usersRepository.findByEmail(email);
        if (userWithSameEmail) throw new UserAlreadyExistsError();

        const password_hash = await hash(password, 8);

        const user = await this.user.Repository.create({
            name,
            email,
            password_hash,
            avatar_id,
        });

        return { user };
    }
}