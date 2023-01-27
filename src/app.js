import Fastify from 'fastify';

import sensible from '@fastify/sensible';

import openAPIGlue from 'fastify-openapi-glue';
import swagger from '@fastify/swagger';

import { specification } from './specification/index.js';
import { Service } from './services/index.js';

import cookie from '@fastify/cookie';
import session from '@fastify/secure-session';
import jwt from '@fastify/jwt';

import { Security } from './security/index.js';

const prefix = '/api';

export async function build () {
  const fastify = Fastify({ logger: true }); // initialization



  fastify.register(cookie);
  fastify.register(session, {
    secret: 'A long string for the cookie secret',
    salt: '7871990895456012',
    cookie: {
      httpOnly: true,
      maxAge: 60 * 60
    }
  });

  fastify.register(jwt, {
    secret: 'A long string for the jwt secret'
  });



  fastify.register(sensible);

  const service = new Service();

  const securityHandlers = new Security(fastify);

  const openAPIGlueOptions = {
    specification,
    service,
    prefix,
    securityHandlers
  };

  const swaggerOptions = {
    openapi: specification,
    routePrefix: '/docs',
    exposeRoute: true
  };

  fastify.register(swagger, swaggerOptions);

  fastify.register(openAPIGlue, openAPIGlueOptions);

 

  return fastify;
}
