// src/components/Html.js
import React, { useContext } from "react";
import useQuiz from "src/hooks/useQuiz";
import Question from "src/components/common/question";
import QuestionStepText from "src/components/common/question-step-text";
import Result from "src/components/common/result";

function Html() {
  const { lengthOfQuestions, currentQuestionIndex, currentQuestion, nextQuestion, hasMoreQuestions } = useQuiz("HTML");

  if (!currentQuestion) return <p>Quiz not found</p>;

  const { question, options, answer } = currentQuestion;

  if (!hasMoreQuestions) return <Result length={lengthOfQuestions} />;

  return (
    <>
      <QuestionStepText currentQuestion={currentQuestionIndex} length={lengthOfQuestions} />

      <Question
        question={question}
        options={options}
        answer={answer}
        handleNext={nextQuestion}
        hasMoreQuestions={hasMoreQuestions}
        currentQuestion={currentQuestionIndex}
        length={lengthOfQuestions}
      />
    </>
  );
}

export default Html;
