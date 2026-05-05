import { render, screen, fireEvent } from "@testing-library/react";
import { SampleButton } from "../components/SampleButton";

test("SampleButton renders and responds to click", () => {
  const handleClick = jest.fn();
  render(<SampleButton onClick={handleClick}>Click me</SampleButton>);
  const button = screen.getByTestId("sample-button");
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(button).toHaveTextContent("Click me");
});
