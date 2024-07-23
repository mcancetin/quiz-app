import React from "react";
import PropTypes from "prop-types";

import classNames from "classnames";

function Button({ children, onClick, ...props }) {
  const buttonClasses = classNames(
    "relative cursor-pointer text-pure-white bg-bright-violet heading-sm rounded-xl p-5 w-full shadow-[0_16px_40px_0px_rgba(143, 160, 193, 0.14)] disabled:bg-bright-violet/50 disabled:cursor-not-allowed",
    {
      "hover:after:bg-pure-white/50 hover:after:absolute hover:after:top-0 hover:after:left-0 hover:after:w-full hover:after:h-full": true,
    }
  );

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
