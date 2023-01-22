import { getDB } from '../../utils/db/index.js';

export const getBlog = async (request, reply) => { // still from coding session 05
  const { params } = request;
  const { blogId: id } = params;
  const db = await getDB();

  const { blogs } = db;

  return {
    id,
    ...blogs[id]
  };
};
