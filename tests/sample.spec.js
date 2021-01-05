const app = require('../src/app');
const request = require('supertest')(app);

describe('Samples', () => {
  it('GET samples', async () => {
    const response = await request.get('/samples');
    expect(response.status).toBe(200);
  });

  it('POST samples', async () => {
    const response = await request.post('/samples').send({
      test: 1
    });
    expect(response.status).toBe(200);
  });

  it('Invalid POST samples', async () => {
    const response = await request.post('/samples').send({});
    expect(response.status).toBe(400);
  });
});
