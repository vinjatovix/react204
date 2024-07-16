import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { waitFor } from "@testing-library/dom";

import { getCurrentPath } from "../utils/getCurrentPath.js";
import { Page404 } from "../pages/Page404";
import { Router } from "../components/Router";
import { Route } from "../components/Route";
import { Link } from "../components/Link";

vi.mock("../utils/getCurrentPath.js", () => ({
  getCurrentPath: vi.fn(),
}));

describe("Router", () => {
  beforeEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("should render without problems", () => {
    render(<Router routes={[]} />);
    expect(true).toBeTruthy();
  });

  it("should render 404 if no routes match", () => {
    render(<Router routes={[]} defaultComponent={Page404} />);
    expect(screen.getByText("Go Home")).toBeTruthy();
  });

  it("should render the first route that matches", () => {
    getCurrentPath.mockReturnValueOnce("/about/2");
    const routes = [
      {
        path: "/",
        Component: () => <div>Home</div>,
      },
      {
        path: "/about",
        Component: () => <div>About</div>,
      },
      {
        path: "/about/2",
        Component: () => <div>AIM</div>,
      },
    ];

    render(<Router routes={routes} />);
    expect(screen.getByText("AIM")).toBeTruthy();
    expect(screen.queryByText("About 2")).toBeFalsy();
  });

  it("should navigate using Links", async () => {
    getCurrentPath.mockReturnValueOnce("/");

    render(
      <Router>
        <Route
          path="/"
          Component={() => {
            return (
              <>
                <h1>Home</h1>
                <Link to="/about">Go to About</Link>
              </>
            );
          }}
        />
        <Route path="/about" Component={() => <h1>AIM</h1>} />
      </Router>
    );

    const anchor = screen.getByText(/Go to About/);
    fireEvent.click(anchor);

    waitFor(() => {
      expect(screen.getByText("AIM")).toBeTruthy();
    });
  });
});
