import React from "react";
import PropTypes from "prop-types";

import Card from "src/components/common/card";
import Icon from "src/components/common/icon";
import classNames from "classnames";

const getLetter = (index) => {
  const letters = ["A", "B", "C", "D", "E"];
  return letters[index] || "";
};

function Option({ label, index, onClick, selected, rightOne, isAnswered }) {
  const letter = getLetter(index);
  const isChosen = selected === index;

  const cardClasses = classNames(
    "heading-sm group hover:cursor-pointer flex items-center focus-visible:outline-none focus-visible:ring focus-visible:ring-bright-violet",
    {
      "outline-none ring ring-bright-violet": isChosen,
    },
    {
      "outline-none ring ring-mint-green": isChosen && rightOne && isAnswered,
    },
    {
      "outline-none ring ring-rose-red": isChosen && !rightOne && isAnswered,
    }
  );

  const spanClasses = classNames(
    "inline-block heading-sm px-[14px] py-[7px] rounded-lg mr-4 self-start group-focus-visible:text-pure-white group-focus-visible:bg-bright-violet",
    {
      "text-pure-white bg-bright-violet": isChosen,
    },
    {
      "text-pure-white bg-mint-green": isChosen && rightOne && isAnswered,
    },
    {
      "text-pure-white bg-rose-red": isChosen && !rightOne && isAnswered,
    }
  );

  const iconClasses = classNames("w-6 ml-auto", {
    hidden: !isAnswered,
  });

  return (
    <Card onClick={() => onClick(index)} onFocus={() => onClick(index)} className={cardClasses} tabIndex={index + 1}>
      <span className={spanClasses}>{letter}</span>
      <span className="text-midnight-blue heading-sm">{label}</span>
      <div className={iconClasses}>
        {rightOne && <img src="/assets/images/icon-correct.svg" alt="" />}
        {isChosen && isAnswered && !rightOne && <img src="/assets/images/icon-incorrect.svg" alt="" />}
      </div>
    </Card>
  );
}

Option.propTypes = {
  index: PropTypes.number,
  label: PropTypes.string,
};

export default Option;
