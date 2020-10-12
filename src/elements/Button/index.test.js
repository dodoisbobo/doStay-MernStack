import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

test("Should not allow click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.firstChild).toHaveClass("disabled");
});

test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render link", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
