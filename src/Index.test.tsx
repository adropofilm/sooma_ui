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
  beforeEach(() => {
    jest.resetModules();
  });

  const testProvider = [
    {
      startingPage: "home",
      initialEntry: "/",
      secondaryPage: "quizzes",
      secondaryEntry: "/quizzes",
    },
    {
      startingPage: "quizzes",
      initialEntry: "/quizzes",
      secondaryPage: "home",
      secondaryEntry: "/",
    },
  ];
  describe.each(testProvider)(
    "$startingPage page",
    ({ startingPage, initialEntry, secondaryEntry, secondaryPage }) => {
      const router = createMemoryRouter(Routes, {
        initialEntries: [initialEntry],
      });

      it("renders nav without crashing", () => {
        render(<RouterProvider router={router} />);
        expect(screen.getByRole("navigation")).toBeInTheDocument();
      });

      it(`renders when on ${secondaryEntry}`, () => {
        render(<RouterProvider router={router} />);
        expect(
          screen.getByTestId(`${startingPage}-component`)
        ).toBeInTheDocument();
      });

      it(`nav link is active when on /${startingPage}`, () => {
        render(<RouterProvider router={router} />);
        const link = screen.getByRole("link", {
          name: `${startingPage} page link`,
        });
        const LinkItem = link.closest("li");
        expect(LinkItem).toHaveClass("nav-selected");
      });

      it(`nav link is not active when on ${secondaryEntry}`, () => {
        render(<RouterProvider router={router} />);
        const user = userEvent.setup();
        user.click(
          screen.getByRole("link", { name: `${secondaryPage} page link` })
        );
        const link = screen.getByRole("link", {
          name: `${secondaryPage} page link`,
        });
        const linkItem = link.closest("li");
        expect(linkItem).toHaveClass("nav-deselected");
      });
    }
  );
});
