import { Repository } from "../../shared";
import { UserDto } from "./UserModel";

export abstract class UserRepository implements Repository<UserDto> {
    find(_: Record<string, unknown>): Promise<UserDto & { id: string; }[]> {
        throw new Error("Method not implemented.");
    }
    remove(_: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    save(_: UserDto | (UserDto & { id: string; })): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}