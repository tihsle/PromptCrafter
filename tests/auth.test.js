const request = require('supertest');
const app = require('../app'); 

jest.setTimeout(10000);

describe('Auth Routes', () => {
  const user = { email: `test${Date.now()}@example.com`, password: 'password123' };

  it('should sign up a new user', async () => {
    const res = await request(app)
      .post('/auth/signup')
      .send({ ...user, name: 'Test User' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
  });

  it('should log in an existing user', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send(user);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});