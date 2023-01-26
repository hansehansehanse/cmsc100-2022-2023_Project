import Fastify from 'fastify';

import sensible from '@fastify/sensible';

// import { general } from './services/general/index.js';

// import { createBlog } from './services/blogs/create-blog.js';
// import { getManyBlog } from './services/blogs/get-many-blog.js';
// import { getBlog } from './services/blogs/get-blog.js';

// import { updateBlog } from './services/blogs/update-blog.js';
// import { deleteBlog } from './services/blogs/delete-blog.js';

import openAPIGlue from 'fastify-openapi-glue';
import swagger from '@fastify/swagger';

const prefix = '/api';

export async function build () {
  const fastify = Fastify({ logger: true }); // initialization
  fastify.register(sensible);

  const openAPIGlueOptions = {
    prefix 
  };

  const swaggerOptions = {
    exposeRoute: true
  };

  fastify.register(swagger, swaggerOptions);

  fastify.register(openAPIGlue, openAPIGlueOptions);
  

  // fastify.get(prefix, general);
  // // check app.js if errors occur

  // // create a blog post
  // fastify.post(`${prefix}/blog`, createBlog); // create-blogs.js

  // // get many blog post
  // fastify.get(`${prefix}/blog`, getManyBlog); // get-many-blog.js

  // // get single blog post
  // fastify.get(`${prefix}/blog/:blogId`, getBlog); // get-blog.js         //:blogId... a path not a var

  // // update a blog post
  // fastify.put(`${prefix}/blog/:blogId`, updateBlog);

  // // delete a blog post
  // fastify.delete(`${prefix}/blog/:blogId`, deleteBlog);

  return fastify;
}
