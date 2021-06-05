import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   expect(getByTestId(App).toBeInTheDocument()
// });

test("renders component", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("root")).toBeInTheDocument();
});
