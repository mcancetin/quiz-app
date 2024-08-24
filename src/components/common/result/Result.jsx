import { useContext } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

import { QuestionContext } from "src/context/QuestionContext";

import Icon from "src/components/common/icon";
import Button from "src/components/common/button";

function Result({ length }) {
  const location = useLocation();

  const pathname = location.pathname.substring(1);
  const capitalized = pathname.charAt(0).toUpperCase() + pathname.substring(1);

  const { correctAnswerCount } = useContext(QuestionContext);

  return (
    <>
      <div className="text-[40px] text-steel-blue dark:text-white mb-10">
        <span className="font-light">Quiz completed</span>
        <br />
        <span className="font-medium">You scored...</span>
      </div>

      <div className="bg-white dark:bg-steel-blue flex flex-col items-center gap-4 p-8 rounded-xl mb-3">
        <div className="flex items-center gap-4">
          <Icon path={pathname} className="w-10" />
          <span className="heading-sm">{capitalized}</span>
        </div>

        <div className="text-[88px] text-steel-blue dark:text-white">{correctAnswerCount}</div>
        <div className=" text-slate-gray dark:text-pale-cornflower-blue">out of {length}</div>
      </div>

      <Button>Play Again</Button>
    </>
  );
}

Result.propTypes = {
  length: PropTypes.number,
};

export default Result;
