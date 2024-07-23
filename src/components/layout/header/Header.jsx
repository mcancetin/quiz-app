import React from "react";
import PropTypes from "prop-types";
import ThemeSwitcher from "src/components/common/theme-switcher";
import { useLocation } from "react-router-dom";
import Icon from "src/components/common/icon";

function Header(props) {
  const location = useLocation();

  const pathname = location.pathname.substring(1);
  const capitalized = pathname.charAt(0).toUpperCase() + pathname.substring(1);

  return (
    <header className="flex justify-between pt-6 pb-14">
      <div className="flex items-center gap-4">
        <Icon path={pathname} className="w-10" />
        <span className="heading-sm">{capitalized}</span>
      </div>
      <ThemeSwitcher />
    </header>
  );
}

Header.propTypes = {};

export default Header;
