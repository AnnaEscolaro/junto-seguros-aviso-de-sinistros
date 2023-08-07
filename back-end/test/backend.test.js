import { expect } from 'chai';
import { app } from '../src/app.js';
import { validBody } from './mocks/post.mock.js';
import db from '../src/db/setup.js';
import request from 'supertest';

describe('POST /sinistro', function () {
  before(async () => {
    await db.read();
  });

  afterEach(async() => {
    db.data = { users: [], claims: [] };
    await db.write();
  });

  it('se recebido body válido, insere registro', async () => {
    const response = await request(app)
      .post('/sinistro')
      .send(validBody)
      .set('Accept', 'application/json');
    expect(response.status).to.equal(200);
    const newId = response.body.id;
    expect(newId).to.exist;
    expect(db.data.claims.find(c => c.id === newId)).not.to.be.undefined;
  });
});
