import { AuthenticatedRequest } from "../../shared/controller/AuthenticatedRequest";
import { FromSchema } from 'json-schema-to-ts';
import { FastifyInstance } from "fastify";
import { AuthHeadersSchema } from "../../shared/controller/CommonHeaders";
import { UserResponseSchema, UserResponseType } from "./UserResponse";
import { ErrorResponseSchema } from "../../shared/controller/CommonResponses";

const GetUserParams =  {
    type: "object",
    properties: {
      userId: { type: "string" },
    },
    required: ["userId"],
} as const;

interface GetUserRequest extends AuthenticatedRequest {
  Params: FromSchema<typeof GetUserParams>;
}

export default async (app: FastifyInstance): Promise<void> => {
  app.get<GetUserRequest>(
    "/:userId",
    {
      schema: {
        description: 'Get user by ID',
        tags: ['user'],
        summary: 'Finds the user or throws an error',
        params: GetUserParams,
        headers: AuthHeadersSchema,
        response: {
          200: UserResponseSchema,
          "4xx": ErrorResponseSchema,
        },
      },
    },
    async (request, response) => {
      const { userId } = request.params;
      const userResponse: UserResponseType = {
        id: userId,
        name: "John",
        email: "john@whatver.com",
      };

      response.status(200).send(userResponse);
    }
  );
}