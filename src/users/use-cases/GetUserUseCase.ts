import { Service } from "diod";
import { UserDto, UserRepository } from "../data"
import { ApiError } from "../../shared"

export interface GetUserInput {
  userId: string;
}

export interface GetUserOutput extends UserDto {
  id: string;
}

@Service()
export class GetUserUseCase {
    constructor(
        private readonly userRepository: UserRepository,
      ) {}
    
      async execute({ userId }: GetUserInput): Promise<GetUserOutput> {
        const found = await this.userRepository.find({id: userId });
        if (!found || !found.length) {
          throw ApiError.notFound('User not found', { userId })
        }
        return found[0] as GetUserOutput;
      }
}