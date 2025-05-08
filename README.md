# PromptCrafter
PromptCrafter provides an API backend for saving, categorizing, sharing, and testing generative AI prompts.

## Description
With the explosion of generative AI tools like ChatGPT, Midjourney, and DALL·E, users increasingly rely on well-crafted prompts to get high-quality outputs. However, managing, testing, and iterating on prompts is disorganized. PromptCrafter provides an API backend for saving, categorizing, sharing, and testing generative AI prompts.

##  Problem Statement
Prompt engineering is powerful but under-supported from a tooling perspective. Users lack a backend system to store prompt versions, share them with collaborators, or evaluate output quality. PromptCrafter solves this by offering an authenticated API that lets users manage their personal or team prompt collections.

## 3. Technical Components

### Authentication & Authorization
- JWT-based auth with role-based access (user/admin)
- Middleware to protect user routes and enforce ownership

### Routes

**Auth Routes**  
- POST /auth/signup – create user account  
- POST /auth/login – return access token  

**Prompt Routes (CRUD)**  
- GET /prompts – list prompts for logged-in user  
- POST /prompts – create a new prompt  
- GET /prompts/:id – view prompt by ID  
- PATCH /prompts/:id – update a prompt  
- DELETE /prompts/:id – delete a prompt  

**Test Log Routes (CRUD)**  
- POST /logs – store output or result of a prompt  
- GET /logs?promptId=... – retrieve prompt usage history  
- DELETE /logs/:id – remove a test log

**Search + Filter** (Optional) 
- GET /search?q=blog+hook – text search prompts by title/body/tags  
- GET /prompts?model=gpt4&tag=marketing – filter by model/tag

---

### Data Models

**User**
```js
{
  _id,
  email,
  passwordHash,
  name,
  createdAt
}
```

**Prompt**
```js
{
  _id,
  ownerId,
  title,
  content,
  model: ['ChatGPT', 'DALL·E', 'Claude'],
  tags: [String],
  createdAt,
  updatedAt
}
```

**Log**
```js
{
  _id,
  promptId,
  output,
  notes,
  modelUsed,
  score,
  createdAt
}
```

---

###  External Data Integration
(Optional): Fetch output from OpenAI’s API or Other AI API for live prompt testing.

---
## 4. Project Requirements Alignment

| Requirement                                | Met? | Notes |
|--------------------------------------------|------|-------|
| Express API                                | yes   | Core backend is Express-based |
| Authentication & Authorization             | yes   | JWT for user login & access control |
| Two sets of CRUD routes                    | yes    | `/prompts` and `/logs` |
| Indexes for performance and uniqueness     | yes   | Email (unique), tags/text fields indexed |
| Text Search / Aggregation / Lookup         | yes    | Full-text search via MongoDB `$text` |
| External data (optional)                   | yes   | Optional OpenAI integration |
| >80% test coverage                         | yes    | Jest + Supertest |
| Postman or frontend demo                   | yes    | Will build a simple frontend OR provide Postman collection |

---

## 5. Timeline

| Week | Tasks                                                                 |
|------|-----------------------------------------------------------------------|
| 5    | Scaffold project, set up MongoDB models, implement auth              |
| 6    | Build out CRUD routes for `/prompts` with validation and testing     |
| 7    | Add `/logs` routes and connect to prompt usage tracking              |
| 8    | Write Jest/Supertest coverage, add search & filters                  |
| 9    | Optional: OpenAI API or Other AI API integration, polish errors/responses            |
| 10   | Prepare demo, finish README, submit and present                      |




