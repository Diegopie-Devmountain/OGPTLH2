import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/movies', (req, res, ctx) => {
    return res(ctx.json([{ movieId: 1, title: 'Test Movie' }]));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test.todo('renders homepage at /', async () => {});

describe.todo('page navigation', () => {
  test.todo('can navigate to all movies page', async () => {});

  test.todo('can navigate to the login page', async () => {});

  test.todo('can navigate to the user ratings page', async () => {});

  test.todo('can navigate to a movie detail page', async () => {});
});

test.todo('logging in redirects to user ratings page', async () => {});

test.todo('creating a rating redirects to user ratings page', async () => {});
