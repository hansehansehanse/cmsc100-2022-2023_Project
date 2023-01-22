import Fastify from 'fastify';

import { general } from './services/general/index.js';

import { createBlog } from './services/blogs/create-blog.js';
import { getManyBlog } from './services/blogs/get-many-blog.js';
import { getBlog } from './services/blogs/get-blog.js';

const prefix = '/api';

export async function build () {
  const fastify = Fastify({ logger: true });

  fastify.get(prefix, general);
  // check app.js if errors occur
  // create a blog page
  fastify.post(`${prefix}/blog`, createBlog); // create-blogs.js

  // get many blog
  fastify.get(`${prefix}/blog`, getManyBlog); // get-many-blog.js

  // get single blog
  fastify.get(`${prefix}/blog/:blogId`, getBlog); // get-blog.js         //:blogId... a path not a var

  return fastify;
}
