import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Icon({ color, path, className }) {
  const imgContainerClasses = classNames(
    "rounded-xl group-hover:scale-125 transition-all",
    {
      "bg-[#fff1e9]": path === "html",
      "bg-[#E0FDEF]": path === "css",
      "bg-[#EBF0FF]": path === "javascript",
      "bg-[#F6E7FF]": path === "accessibility",
    },
    className
  );

  return (
    <div className={imgContainerClasses}>
      <img className="p-2 " src={`/assets/images/icon-${path}.svg`} alt="" />
    </div>
  );
}

Icon.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  classNames: PropTypes.string,
};

export default Icon;
