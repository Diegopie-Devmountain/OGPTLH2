import matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';
import { afterEach, expect } from 'vitest';

// Add matchers from React Testing Library
expect.extend(matchers);

// Cleanup after each test
afterEach(() => {
  cleanup();
});
