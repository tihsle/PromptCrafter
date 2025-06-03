const request = require('supertest');
const app = require('../app');
let token;
let logId;
let promptId;

beforeAll(async () => {
  const loginRes = await request(app).post('/auth/login').send({
    email: 'test@example.com',
    password: 'password123',
  });
  token = loginRes.body.token;

  const promptRes = await request(app)
    .post('/prompts')
    .set('Authorization', `Bearer ${token}`)
    .send({
      title: 'Test Prompt',
      content: 'Generate ideas',
      model: 'ChatGPT',
      tags: ['test'],
    });
  promptId = promptRes.body._id;
});

describe('Log Routes', () => {
  it('should create a log', async () => {
    const res = await request(app)
      .post('/logs')
      .set('Authorization', `Bearer ${token}`)
      .send({
        promptId,
        output: 'Some generated text.',
        notes: 'Worked well.',
        modelUsed: 'ChatGPT',
        score: 5,
      });
    expect(res.statusCode).toBe(201);
    logId = res.body._id;
  });

  it('should get logs by promptId', async () => {
    const res = await request(app)
      .get(`/logs?promptId=${promptId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should delete a log', async () => {
    const res = await request(app)
      .delete(`/logs/${logId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(204);
  });
});