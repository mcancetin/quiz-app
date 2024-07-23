import React from "react";
import NavigationItem from "src/components/common/navigation-item";

const pages = [
  {
    path: "html",
    label: "HTML",
  },
  {
    path: "css",
    label: "CSS",
  },
  {
    path: "javascript",
    label: "Javascript",
  },
  {
    path: "accessibility",
    label: "Accessibility",
  },
];

function Home(props) {
  return (
    <>
      <h1 className="heading-lg font-light">
        Welcome to the <strong className="font-medium">Frontend Quiz!</strong>
      </h1>

      <span className="body-text italic inline-block pb-10">
        Pick a subject to get started.
      </span>

      <div className="flex flex-col gap-3">
        {pages.map((page) => (
          <NavigationItem key={page.path} path={page.path} label={page.label} />
        ))}
      </div>
    </>
  );
}

Home.propTypes = {};

export default Home;
