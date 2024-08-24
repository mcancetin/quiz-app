import React, { useContext } from "react";
import PropTypes from "prop-types";
import { QuestionContext } from "src/context/QuestionContext";

function QuestionStepText({ length }) {
  const { currentQuestionIndex } = useContext(QuestionContext);
  return (
    <div className="text-slate-gray dark:text-pale-cornflower-blue italic text-sm mb-3">
      Question {currentQuestionIndex + 1} of {length}
    </div>
  );
}

QuestionStepText.propTypes = {
  length: PropTypes.number,
  currentQuestion: PropTypes.number,
};

export default QuestionStepText;
