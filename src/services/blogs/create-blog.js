import { getDB, saveDB } from '../../utils/db/index.js'; // need iupdate to after refactor
import { v4 } from 'uuid';

export const createBlog = async (request, reply) => { // all from app.js
  const { body } = request;
  const { title, description } = body;
  const db = await getDB();

  const id = v4();

  const blog = {
    title,
    description,
    createdDate: new Date().getTime(),
    updatedDate: new Date().getTime()
  };

  db.blogs[id] = blog;

  await saveDB(db);

  // same as app.js
  return {
    id,
    ...blog
  };
};
