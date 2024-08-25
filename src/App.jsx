import { lazy, Suspense } from "react";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Container from "src/components/layout/container";

const Home = lazy(() => import("src/pages/Home"));
const Quiz = lazy(() => import("src/pages/Quiz"));

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
      { path: "quiz", element: <Quiz /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
