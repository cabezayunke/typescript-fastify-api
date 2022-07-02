import { Service } from "diod";
import { UserDto, User } from "./UserModel";
import { UserRepository } from "./UserRepository";

@Service()
export class MongoUserRepository extends UserRepository {
    async find(criteria:  Record<string, unknown>): Promise<UserDto & { id: string; }[]> {
        const { id, ...rest } = criteria
        if (id) {
            return User.find({_id: id }).lean();
        }
        return User.find(rest).lean();
    }

    async remove(key: string): Promise<void> {
        await User.remove({ _id: key }).lean();
    }

    async save(data: UserDto & { id: string; }): Promise<void> {
        if (data.id) {
            await User.updateOne(data)
        } else;{
            await User.create(data)
        }
    }

}