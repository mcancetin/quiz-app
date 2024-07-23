// src/components/common/question.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Option from "../option";

function Question({ question, options, answer, handleNext, hasMoreQuestions }) {
  const [selected, setSelected] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (index) => {
    setSelected(index);
  };

  const handleValidate = () => {
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    handleNext();
    setSelected(null);
    setIsAnswered(false);
  };

  return (
    <>
      <p className="heading-md">{question}</p>

      <div className="flex flex-col gap-3 pb-8">
        {options.map((option, index) => (
          <Option
            key={index}
            index={index}
            label={option}
            onClick={handleSelect}
            selected={selected}
            rightOne={option === answer}
            isAnswered={isAnswered}
          />
        ))}
      </div>

      <Button
        disabled={selected === null}
        onClick={isAnswered ? handleNextQuestion : handleValidate}
      >
        {isAnswered
          ? hasMoreQuestions
            ? "Next Question"
            : "Finish Quiz"
          : "Submit Answer"}
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
