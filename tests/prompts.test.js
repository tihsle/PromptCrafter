const request = require('supertest');
const app = require('./app');
let token;
let promptId;

beforeAll(async () => {
  const res = await request(app).post('/auth/login').send({
    email: 'test@example.com',
    password: 'password123',
  });
  token = res.body.token;
});

describe('Prompt Routes', () => {
  it('should create a new prompt', async () => {
    const res = await request(app)
      .post('/prompts')
      .set('Authorization', `Bearer ${token}`)
      .send({
        title: 'Blog Post',
        content: 'Write a blog post about AI.',
        model: 'ChatGPT',
        tags: ['blog', 'ai'],
      });
    expect(res.statusCode).toBe(201);
    promptId = res.body._id;
  });

  it('should get all prompts', async () => {
    const res = await request(app)
      .get('/prompts')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update a prompt', async () => {
    const res = await request(app)
      .patch(`/prompts/${promptId}`)
      .set('Authorization', `Bearer ${token}`)
      .send({ title: 'Updated Title' });
    expect(res.statusCode).toBe(200);
  });

  it('should delete a prompt', async () => {
    const res = await request(app)
      .delete(`/prompts/${promptId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(204);
  });
});