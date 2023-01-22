import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';

tap.mochaGlobals();

const prefix = '/api';

describe('Deleting a blog postttt should work', async () => {
  let app;

  before(async () => {
    app = await build();
  });

  it('should return success = true if ID is deleted', async () => {
    const newBlog = {
      title: 'New Blog10 test',
      description: 'New Description10 test'
    };
    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    const { id } = await createResponse.json();

    const response = await app.inject({
      method: 'DELETE',
      url: `${prefix}/blog/${id}`
    });

    response.statusCode.must.be.equal(200);
    const result = await response.json();

    result.success.must.be.true();



    const getResponse = await app.inject({                  //?
      method: 'GET',
      url: `${prefix}/blog/${id}`
    });

    getResponse.statusCode.must.be.equal(404);
    
  });
});
