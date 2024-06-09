import { lazy, Suspense } from "react";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("src/pages/Home"));

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
      { path: "html", element: <h1>HTML</h1> },
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

function Container({ children }) {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-[url('/assets/images/pattern-background-desktop-light.svg')]">
      <header>header</header>
      <main>{children}</main>
    </div>
  );
}
