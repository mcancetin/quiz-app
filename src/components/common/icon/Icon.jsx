import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function Icon({ path, className }) {
  const imgContainerClasses = classNames(
    "rounded-xl group-hover:scale-125 transition-all",
    {
      "bg-[#fff1e9]": path === "HTML",
      "bg-[#E0FDEF]": path === "CSS",
      "bg-[#EBF0FF]": path === "JavaScript",
      "bg-[#F6E7FF]": path === "Accessibility",
    },
    className
  );

  return (
    <div className={imgContainerClasses}>
      <img className="p-2 " src={`/assets/images/icon-${path.toLowerCase()}.svg`} alt="" />
    </div>
  );
}

Icon.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  classNames: PropTypes.string,
};

export default Icon;
