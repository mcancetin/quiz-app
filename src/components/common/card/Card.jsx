import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Card({ children, className, ...props }) {
  const cardClasses = classNames("p-3 lg:px-4 lg:py-[20px] bg-pure-white dark:bg-steel-blue rounded-xl", className);

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.any,
};

export default Card;
