import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';

tap.mochaGlobals();

const prefix = '/api';

describe('Creating a blog post should work!!', async () => {
  let app;

  before(async () => {
    app = await build();
  });

  it('should return the created object with ID', async () => {
    const newBlog = {
      title: 'New Blog Post1',
      description: 'New Description1'
    };
    const response = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });
    // checks if status code is 200
    response.statusCode.must.be.equal(200);
    const result = await response.json();

    result.id.must.not.be.null();

    result.title.must.be.equal(newBlog.title);
    result.description.must.be.equal(newBlog.description);

    // removed isDone

    result.createdDate.must.not.be.null();
    result.updatedDate.must.not.be.null();
  });
});
