// src/components/Html.js
import React from "react";
import useQuiz from "src/hooks/useQuiz";
import Question from "src/components/common/question";

function Html() {
  const { currentQuestion, nextQuestion, hasMoreQuestions } = useQuiz("HTML");

  if (!currentQuestion) return <p>Quiz not found</p>;

  const { question, options, answer } = currentQuestion;

  return (
    <Question
      question={question}
      options={options}
      answer={answer}
      handleNext={nextQuestion}
      hasMoreQuestions={hasMoreQuestions}
    />
  );
}

export default Html;
