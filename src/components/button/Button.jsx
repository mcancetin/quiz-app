import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

function Button({ children, onClick }) {
  const buttonClasses = classNames(
    "relative text-pure-white bg-bright-violet heading-sm rounded-3xl p-8 w-full shadow-[0_16px_40px_0px_rgba(143, 160, 193, 0.14)]",
    {
      "hover:after:bg-pure-white/50 hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:w-full hover:after:h-full": true,
    }
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
