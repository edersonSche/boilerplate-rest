const sampleService = require('./sample.service');

describe('Sample', () => {
  it('create sample', () => {
    const data = sampleService.createSample({ test: 1 });
    expect(data).toMatchObject({ test: 1 });
  });
});
