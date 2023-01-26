export const blog = {
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
            }
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
            }
        }
    }
};