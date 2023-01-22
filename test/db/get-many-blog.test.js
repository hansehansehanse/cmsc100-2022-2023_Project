import tap from 'tap';
import { build } from '../../src/app.js';
import 'must/register.js';

tap.mochaGlobals();

const prefix = '/api';

describe('Getting many blogs MUSTTT work', async () => {
  let app;

  before(async () => {
    app = await build();
  });

  it('should return the list of created objects with default limit', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `${prefix}/blog`
    });

    response.statusCode.must.be.equal(200);
    const result = await response.json();

    result.length.must.not.be.above(5);
  });

  it('should return the list of created objects with given limit', async () => {
    const response = await app.inject({
      method: 'GET',
      url: `${prefix}/blog?limit=2`
    });

    response.statusCode.must.be.equal(200);
    const result = await response.json();

    result.length.must.not.be.above(2);
  });
});
