import '@testing-library/jest-dom';
import { expect } from "vitest";

expect.extend({
  toBe(received, expected, message) {
    const pass = received === expected;
    return {
      pass,
      message: () =>
        pass
          ? `Esperado ${expected}`
          : message || `Esperado: ${expected}, Recebido: ${received}`
    };
  }
});
