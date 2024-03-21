import { fileURLToPath } from 'url';
import path from 'path';
import jestOpenAPI from 'jest-openapi';

const openApiPath = path.resolve(__dirname, '../openapi.yaml');
console.log(openApiPath);
jestOpenAPI(openApiPath);

// Write your test
describe('GET /example/endpoint', () => {
  it('should satisfy OpenAPI spec', async () => {
    // Get an HTTP response from your server (e.g. using axios)
    const res = await fetch('http://localhost:3000/example/endpoint', {
        method: 'GET',
    });

    expect(res.status).toEqual(200);

    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).toSatisfyApiSpec();
  });
});