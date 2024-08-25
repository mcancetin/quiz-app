import React, { useContext } from "react";
import PropTypes from "prop-types";
import { QuestionContext } from "src/context/QuestionContext";

function QuestionStepText() {
  const { currentQuestionIndex, totalQuestionCount } = useContext(QuestionContext);
  return (
    <div className="body-text text-slate-gray dark:text-pale-cornflower-blue italic mb-3">
      Question {currentQuestionIndex + 1} of {totalQuestionCount}
    </div>
  );
}

QuestionStepText.propTypes = {
  length: PropTypes.number,
  currentQuestion: PropTypes.number,
};

export default QuestionStepText;
