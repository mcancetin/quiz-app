import { lazy, Suspense } from "react";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Container from "src/components/layout/container";

const Home = lazy(() => import("src/pages/Home"));
const Html = lazy(() => import("src/pages/Html"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    ),
    children: [
      { element: <Home />, index: true },
      { path: "html", element: <Html /> },
      { path: "css", element: <h1>css</h1> },
      { path: "javascript", element: <h1>javascript</h1> },
      { path: "accessibility", element: <h1>accessibility</h1> },
      { path: "*", element: <div>Not found</div> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
