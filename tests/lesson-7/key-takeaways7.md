# Brief Overview of API and Related Tools

## What is an API?
API (Application Programming Interface) is a set of rules that allows different software applications to communicate with each other. It acts as a bridge between systems, enabling data exchange and functionality sharing without exposing internal details.

Example: When you use a weather app, it calls an API to fetch weather data from a server.

---

## API Components
1. **Endpoint**: The URL that represents the resource.
2. **Method**: HTTP methods like GET, POST, PUT, DELETE define the action to perform.
3. **Request**: Contains headers, body, params—used to send data to the API.
4. **Response**: The data returned from the API after processing a request.
5. **Status Code**: Indicates the result of the request (e.g., 200 OK, 404 Not Found).
6. **Authentication**: Security mechanism such as API Key, Bearer Token, etc.

---

## API with Postman
Postman is a powerful tool for testing and developing APIs using a friendly user interface. With Postman, you can:
- Send requests and view responses.
- Organize requests in collections.
- Write test scripts to validate responses.
- Automate testing using the Collection Runner or Newman.

---

## API with Playwright
Playwright supports API testing in addition to UI testing. Some capabilities include:
- Sending API requests using `request.newContext()` or `page.request`.
- Asserting response status codes, headers, and body.
- Combining API and UI testing for full end-to-end testing.
- Using API calls to create precondition data before running UI tests.

Example:
```
const response = await request.get('/api/users');
expect(response.status()).toBe(200);
const data = await response.json();
expect(data.length).toBeGreaterThan(0);
```

---

## POM for API (Page Object Model for API)

POM (Page Object Model) is a design pattern used in test automation to separate the logic for interacting with an application from the test cases. Although it's commonly used for UI testing, the same principle can be applied to API testing.

Example: 
```
// userAPI.ts
export class UserAPI {
  constructor(private request: APIRequestContext) {}

  async getUser(id: string) {
    return this.request.get(`/api/users/${id}`);
  }

  async createUser(data: object) {
    return this.request.post(`/api/users`, { data });
  }
}
```



