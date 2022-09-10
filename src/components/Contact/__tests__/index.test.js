import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);

describe("Contact component", () => {
  // baseline test
  it("renders", () => {
    render(<Contact />);
  });
  it("matches snapshot DOM node structure", () => {
    // render Contact
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("rendersh1tag", () => {
    const { getByTestId } = render(<Contact />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
  });
  it("renderssubmit", () => {
    const { getByTestId } = render(<Contact />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("buttontag")).toHaveTextContent("Submit");
  });
});
