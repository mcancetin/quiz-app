// src/hooks/useQuiz.js
import { useState } from "react";
import data from "src/data";

const useQuiz = (quizTitle) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const { questions = [] } = data.quizzes.find(
    (quiz) => quiz.title === quizTitle
  );

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return {
    currentQuestion,
    nextQuestion,
    hasMoreQuestions: currentQuestionIndex < questions.length - 1,
  };
};

export default useQuiz;
