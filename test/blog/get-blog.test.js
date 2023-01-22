import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';

tap.mochaGlobals();

const prefix = '/api';

describe('Getting a blog MUSTTT work', async () => {
  let app;

  before(async () => {
    app = await build();
  });

  it('should return the created object with id(uuid)', async () => {
    const newBlog = {
      title: 'New Blog Post1 from from get-blog.test',
      description: 'New Description1 from from get-blog.test'
    };

    // ------------------------------------------------------
    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    // ------------------------------------------------------
    const { id } = await createResponse.json();

    // ------------------------------------------------------
    const response = await app.inject({
      method: 'GET',
      url: `${prefix}/blog/${id}`
    });

    response.statusCode.must.be.equal(200);

    const result = await response.json();

    result.id.must.equal(id);

    result.title.must.be.equal(newBlog.title);
    result.description.must.be.equal(newBlog.description);

    result.createdDate.must.not.be.null();
    result.updatedDate.must.not.be.null();
  });
});
