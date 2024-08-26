// src/components/common/question.js
import { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

import { QuestionContext } from "src/context/QuestionContext";

import Button from "src/components/common/button";
import Option from "src/components/common/option";
import QuestionProgressBar from "src/components/common/question-progress-bar";
import useQuiz from "src/hooks/useQuiz";

function Question({ quizTitle }) {
  const { setCorrectAnswerCount } = useContext(QuestionContext);

  const { currentQuestion, hasMoreQuestions, nextQuestion } = useQuiz(quizTitle);

  const { question, options, answer } = currentQuestion;

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
    nextQuestion();
    setSelected(null);
    setIsAnswered(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === "Enter" && !isAnswered) {
        handleValidate();
      } else {
        handleNextQuestion();
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress); // Clean up on unmount
    };
  }, [isAnswered]);

  return (
    <>
      <div className="lg:col-start-1 lg:flex flex-col justify-between">
        <p className="heading-md mb-6">{question}</p>
        <QuestionProgressBar />
      </div>

      <div className="lg:col-start-2 lg:row-start-1 lg:row-end-3">
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
      </div>
    </>
  );
}

Question.propTypes = {
  quizTitle: PropTypes.string,
};

export default Question;
