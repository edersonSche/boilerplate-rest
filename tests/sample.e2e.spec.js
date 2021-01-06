const app = require('../src/app');
const request = require('supertest')(app);

describe('Sample', () => {
  it('GET sample', async () => {
    const response = await request.get('/sample');
    expect(response.status).toBe(200);
  });

  it('POST sample', async () => {
    const response = await request.post('/sample').send({
      test: 1
    });
    expect(response.status).toBe(201);
  });

  it('Invalid POST sample', async () => {
    const response = await request.post('/sample').send({});
    expect(response.status).toBe(400);
  });
});
