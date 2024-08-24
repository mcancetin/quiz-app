import React, { useContext } from "react";
import PropTypes from "prop-types";

import { QuestionContext } from "src/context/QuestionContext";

function QuestionProgressBar({ length, currentQuestion }) {
  const { currentQuestionIndex } = useContext(QuestionContext);
  return (
    <progress
      className="w-full h-4 mb-10 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full   [&::-webkit-progress-bar]:bg-white dark:[&::-webkit-progress-bar]:bg-steel-blue [&::-webkit-progress-value]:bg-bright-violet [&::-moz-progress-bar]:bg-bright-violet"
      value={currentQuestionIndex + 1}
      max={length}
    ></progress>
  );
}

QuestionProgressBar.propTypes = {
  length: PropTypes.number,
  currentQuestion: PropTypes.number,
};

export default QuestionProgressBar;
