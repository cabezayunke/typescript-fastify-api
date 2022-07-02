export const ErrorResponseSchema = {
    $id: "ErrorResponseSchema",
    type: "object",
    description: 'Error response',
    properties: {
      statusCode: { type: "string" },
      error: { type: "string" },
      message: { type: "string" },
    },
    required: ["statusCode", "error", "message"],
  } as const;

