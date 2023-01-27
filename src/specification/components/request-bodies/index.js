export const requestBodies = {
  RequestNewUser: {
    description: 'The request body for creating a NEW user',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/NewUserObject'
        }
      }
    }
  },
  LoginUser: {
    description: 'Logs in a user',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/LoginObject'
        }
      }
    }
  }
};
