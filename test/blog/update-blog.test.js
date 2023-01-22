import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';

tap.mochaGlobals();

const prefix = '/api';

describe('Updating a blog MUST pleaseee work', async () => {
  let app;

  before(async () => {
    app = await build();
  });

  it('should update the title and description with id(uuid)', async () => {
    const newBlog = {
      title: 'New Blog Post1 from from update-blog.test',
      description: 'New Description1 from from update-blog.test'
    };

    const newerBlog = {
      title: 'New Blog Post2 from from update-blog.test',
      description: 'New Description2 from from update-blog.test'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    const { id, createdDate, updatedDate } = await createResponse.json();

    const response = await app.inject({
      method: 'PUT',
      url: `${prefix}/blog/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newerBlog)
    });

    response.statusCode.must.be.equal(200);
    const result = await response.json();

    result.id.must.equal(id);

    result.title.must.be.equal(newerBlog.title);
    result.description.must.be.equal(newerBlog.description);

    result.createdDate.must.be.equal(createdDate);
    result.updatedDate.must.be.above(updatedDate);
  });

  // ------------------------------------------------------             //this starts here
  it('should update the title with uuid', async () => {
    const newBlog = {
      title: 'New Blog3 test',
      description: 'New Description3 test'
    };

    const newerBlog = {
      title: 'Newer Blog4 test'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    const { id, createdDate, updatedDate } = await createResponse.json();

    const response = await app.inject({
      method: 'PUT',
      url: `${prefix}/blog/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newerBlog)
    });

    response.statusCode.must.be.equal(200);
    const result = await response.json();

    result.id.must.equal(id);

    result.title.must.be.equal(newerBlog.title);
    result.description.must.be.equal(newBlog.description);

    result.createdDate.must.be.equal(createdDate);
    result.updatedDate.must.be.above(updatedDate);
  });

  // ------------------------------------------------------                         //here din
  it('should update the description with uuid', async () => {
    const newBlog = {
      title: 'New Blog5 test',
      description: 'New Description5 test'
    };

    const newerBlog = {
      description: 'Newer Description6 test'
    };

    const createResponse = await app.inject({
      method: 'POST',
      url: `${prefix}/blog`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBlog)
    });

    const { id, createdDate, updatedDate } = await createResponse.json();

    const response = await app.inject({
      method: 'PUT',
      url: `${prefix}/blog/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newerBlog)
    });
    // ------------------------------------------------------

    response.statusCode.must.be.equal(200);
    const result = await response.json();

    result.id.must.equal(id);

    result.title.must.be.equal(newBlog.title);
    result.description.must.be.equal(newerBlog.description);

    result.createdDate.must.be.equal(createdDate);
    result.updatedDate.must.be.above(updatedDate);
  });
});
