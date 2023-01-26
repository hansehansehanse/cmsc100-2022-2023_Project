export const user = {
    '/register': {
      post: {
        summary: 'Register a NEW user',
        operationId: 'registerUser',
        requestBody: {
          $ref: '#/components/requestBodies/RequestNewUser'
        },
        responses: {
          200: {
            $ref: '#/components/responses/SuccessfulUserResponse'
          }
        }
      }
    }
  };