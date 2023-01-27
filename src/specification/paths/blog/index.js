export const blog = {
  '/blog/:blogId': {
    get: {
      summary: 'Get a Blog',
      operationId: 'getBlog',
      parameters: [
        {
          $ref: '#/components/parameters/BlogParameterId'
        }
      ],
      responses: {
        200: {
          description: 'A Blog object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogObject'
              }
            }
          }
        }
      },
      security: [
        {}
      ]
    },
    put: {
      summary: 'Update a Blog',
      operationId: 'updateBlog',
      parameters: [
        {
          $ref: '#/components/parameters/BlogParameterId'
        }
      ],
      requestBody: {
        description: 'The request body for Blog',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/BlogRequestObject'
            }
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'A Blog object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogObject'
              }
            }
          }
        }
      },
      security: [
        {}
      ]
    },
    delete: {
      summary: 'Delete a Blog',
      operationId: 'deleteBlog',
      parameters: [
        {
          $ref: '#/components/parameters/BlogParameterId'
        }
      ],
      responses: {
        200: {
          description: 'successful response',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  success: {
                    type: 'boolean'
                  }
                }
              }
            }
          }
        }
      },
      security: [
        {}
      ]
    }
  },
  '/blog': {
    post: {
      summary: 'Create a Blog',
      operationId: 'createBlog',
      requestBody: {
        description: 'The request body for Blog',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/BlogRequestRequiredObject'
            }
          }
        },
        required: true
      },
      responses: {
        200: {
          description: 'A Blog object',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BlogObject'
              }
            }
          }
        }
      },
      security: [
        {}
      ]
    },
    get: {
      summary: 'Get many Blog',
      operationId: 'getManyBlog',
      parameters: [
        {
          name: 'limit',
          in: 'query',
          description: 'The number of items returned',
          schema: {
            type: 'number'
          }
        }
      ],
      responses: {
        200: {
          description: 'A Blog object',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/BlogObject'
                }
              }
            }
          }
        }
      },
      security: [
        {}
      ]
    }
  }
};
