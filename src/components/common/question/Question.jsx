// src/components/common/question.js
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import { QuestionContext } from "src/context/QuestionContext";

import Button from "src/components/common/button";
import Option from "src/components/common/option";
import QuestionProgressBar from "src/components/common/question-progress-bar";

function Question({ question, options, answer, handleNext, hasMoreQuestions, length, currentQuestion }) {
  const { setCorrectAnswerCount } = useContext(QuestionContext);

  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (index) => {
    setSelected(index);
  };

  const handleValidate = () => {
    setIsAnswered(true);

    if (options[selected] === answer) {
      setCorrectAnswerCount((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    handleNext();
    setSelected(null);
    setIsAnswered(false);
  };

  return (
    <>
      <p className="heading-md mb-6">{question}</p>

      <QuestionProgressBar currentQuestion={currentQuestion} length={length} />

      <div className="flex flex-col gap-3 pb-8">
        {options.map((option, index) => (
          <Option
            key={index}
            index={index}
            label={option}
            onClick={() => handleSelect(index)}
            selected={selected}
            rightOne={option === answer}
            isAnswered={isAnswered}
          />
        ))}
      </div>

      <Button disabled={selected === null} onClick={isAnswered ? handleNextQuestion : handleValidate}>
        {isAnswered ? (hasMoreQuestions ? "Next Question" : "Finish Quiz") : "Submit Answer"}
      </Button>
    </>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  answer: PropTypes.string.isRequired,
  handleNext: PropTypes.func.isRequired,
  hasMoreQuestions: PropTypes.bool.isRequired,
};

export default Question;
