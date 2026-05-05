import { sum } from "../utils/sum";

test("sum adds two numbers", () => {
  expect(sum(2, 3)).toBe(5);
  expect(sum(-1, 1)).toBe(0);
});
