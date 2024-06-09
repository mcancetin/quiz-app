import React from "react";
import PropTypes from "prop-types";
import Button from "src/components/button";

function Home(props) {
  return (
    <>
      <h1 className="heading-lg">Hello World!</h1>
      <Button onClick={() => console.log("Hello, world!")}>Click me!</Button>
    </>
  );
}

Home.propTypes = {};

export default Home;
