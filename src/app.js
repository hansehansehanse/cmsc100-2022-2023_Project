import Fastify from 'fastify';
import { getDB, saveDB } from './utils/db/index.js';
import { v4 } from 'uuid';

const prefix = '/api';

export async function build () {
  // initialize fastify
  const fastify = Fastify({ logger: true });

  fastify.get(prefix, async (request, reply) => {
    return { success: true };
  });

  // create blog
  fastify.post(`${prefix}/blog`, async (request, reply) => {
    const { body } = request;
    const { title, description } = body;
    const db = await getDB();

    const id = v4();

    const blog = { // removed isDone
      title,
      description,
      createdDate: new Date().getTime(),
      updatedDate: new Date().getTime()
    };

    db.blogs[id] = blog;

    await saveDB(db);

    /**                                        //okk
     * const newObj = {
     *   id
     * }
     *
     * for (const key in todo) {
     *   newObj[key] = todo[key]
     * }
     *
     * return newObj
     */
    return {
      id,
      ...blog
    };
  });

  return fastify;
}
