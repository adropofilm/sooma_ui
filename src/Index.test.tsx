import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Routes from "./routes";
import React from "react";

jest.mock("./components/Pages/Home", () => ({
  Home: () => <div data-testid="home-component" />,
}));

jest.mock("./components/Pages/Quizzes", () => ({
  Quizzes: () => <div data-testid="quizzes-component" />,
}));

describe("App", () => {
  const testData = [
    {
      startingPage: "home",
      initialEntry: "/",
      secondaryPage: "lg-quizzes-nav-item",
      testId: "lg-home-nav-item",
    },
    {
      startingPage: "quizzes",
      initialEntry: "/quizzes",
      secondaryPage: "lg-home-nav-item",
      testId: "lg-quizzes-nav-item",
    },
    {
      startingPage: "home",
      initialEntry: "/",
      secondaryPage: "sm-quizzes-nav-item",
      testId: "sm-home-nav-item",
    },
    {
      startingPage: "quizzes",
      initialEntry: "/quizzes",
      secondaryPage: "sm-home-nav-item",
      testId: "sm-quizzes-nav-item",
    },
  ];

  describe.each(testData)(
    "$startingPage page",
    ({ startingPage, initialEntry, secondaryPage, testId }) => {
      let router;

      beforeEach(() => {
        jest.resetModules();
        router = createMemoryRouter(Routes, {
          initialEntries: [initialEntry],
        });
        render(<RouterProvider router={router} />);
      });

      it("renders nav without crashing", () => {
        expect(screen.getByRole("navigation")).toBeInTheDocument();
      });

      it(`renders when on $initialEntry`, () => {
        expect(
          screen.getByTestId(`${startingPage}-component`)
        ).toBeInTheDocument();
      });

      it(`nav link is active when on /${startingPage}`, () => {
        const link = screen.getByTestId(testId);
        const navSelectedValue = link?.getAttribute("data-navselected");
        expect(navSelectedValue).toBe("true");
      });

      it(`initial page nav link is not active when on secondary page`, () => {
        const user = userEvent.setup();
        user.click(screen.getByTestId(testId));
        const link = screen.getByTestId(secondaryPage);
        const navSelectedValue = link?.getAttribute("data-navselected");
        expect(navSelectedValue).toBe("false");
      });
    }
  );
});
