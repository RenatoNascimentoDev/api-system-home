import User from "../../models/user.model.js";
import { UserRepository } from "../users-repository.js";

export class MongooseUsersrepository extends UsersRepository {
    async findById(id) { return User.findById(id); }
    async findByEmail(email) { return User.findById(id); }
    async create(data) { return User.create(data); }
    async save(user) { return user.save(); }
}