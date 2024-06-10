import React, { useState } from "react";
import classNames from "classnames";

const initialTheme = localStorage.getItem("theme") || "light";

function ThemeSwitcher() {
  const [theme, setTheme] = useState(initialTheme);

  localStorage.setItem("theme", theme);

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const handleToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", theme);
  };

  const switchClasses = classNames({
    "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-pure-white rounded-full transition ease-in-out": true,
    "translate-x-1": theme === "light",
    "translate-x-7": theme === "dark",
  });

  return (
    <div className="flex gap-4 items-center">
      <div>
        <img
          src={`/assets/images/icon-sun-${
            theme === "light" ? "dark" : "light"
          }.svg`}
          alt=""
        />
      </div>
      <div
        className="relative w-12 h-7 bg-bright-violet rounded-full cursor-pointer"
        onClick={handleToggle}
      >
        <span className={switchClasses}></span>
      </div>
      <div>
        <img
          src={`/assets/images/icon-moon-${
            theme === "light" ? "dark" : "light"
          }.svg`}
          alt=""
        />
      </div>
    </div>
  );
}

export default ThemeSwitcher;
