import { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { QuestionContext } from "src/context/QuestionContext";

import Icon from "src/components/common/icon";
import Button from "src/components/common/button";

import useCategory from "src/hooks/useCategory";

function Result() {
  const navigate = useNavigate();
  const { category } = useCategory();

  const capitalized = category.charAt(0).toUpperCase() + category.substring(1);

  const { correctAnswerCount, setCurrentQuestionIndex, totalQuestionCount, setCorrectAnswerCount } =
    useContext(QuestionContext);

  const handlePlayAgain = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswerCount(0);
    navigate("/");
  };

  return (
    <div className="lg:flex lg:gap-32">
      <div className="heading-lg text-steel-blue dark:text-white mb-10">
        <span className="font-light">Quiz completed</span>
        <br />
        <span className="font-medium">You scored...</span>
      </div>

      <div className="flex-1">
        <div className="bg-white dark:bg-steel-blue flex flex-col items-center gap-4 p-8 rounded-xl mb-3 lg:mb-8">
          <div className="flex items-center gap-4">
            <Icon path={category} className="w-10" />
            <span className="heading-sm">{capitalized}</span>
          </div>

          <div className="text-[88px] text-steel-blue dark:text-white">{correctAnswerCount}</div>
          <div className=" text-slate-gray dark:text-pale-cornflower-blue">out of {totalQuestionCount}</div>
        </div>

        <Button onClick={handlePlayAgain}>Play Again</Button>
      </div>
    </div>
  );
}

Result.propTypes = {
  length: PropTypes.number,
};

export default Result;
