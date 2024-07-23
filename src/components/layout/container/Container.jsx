import React from "react";
import PropTypes from "prop-types";

import Header from "src/components/layout/header";

function Container({ children }) {
  return (
    <div className="min-h-screen bg-ghost-white dark:bg-midnight-blue bg-no-repeat bg-cover bg-[url('/assets/images/pattern-background-desktop-light.svg')] dark:bg-[url('/assets/images/pattern-background-desktop-dark.svg')]">
      <div className="wrapper">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.object,
};

export default Container;
