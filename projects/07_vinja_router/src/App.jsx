import { lazy } from "react";

import SearchPage from "./pages/SearchPage";

import { Suspense } from "react";
import { Router } from "./components/Router";
import { Route } from "./components/Route";
import { Page404 } from "./pages/Page404";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

const routes = [
  // {
  //   path: "/",
  //   Component: HomePage,
  // },
  // {
  //   path: "/about",
  //   Component: AboutPage,
  // },
  {
    path: "/search/:query",
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/:lang/about" Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
