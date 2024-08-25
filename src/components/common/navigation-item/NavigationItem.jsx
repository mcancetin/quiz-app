import React from "react";
import PropTypes from "prop-types";

import Card from "src/components/common/card";
import Icon from "src/components/common/icon";

function NavigationItem({ path, label }) {
  return (
    <a href={`/quiz?category=${path}`}>
      <Card className="flex items-center gap-8 group">
        <Icon path={path} />
        <span className="heading-sm">{label}</span>
      </Card>
    </a>
  );
}

NavigationItem.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
};

export default NavigationItem;
