// src/hooks/useQuiz.js
import { useContext } from "react";
import { QuestionContext } from "src/context/QuestionContext";

import data from "src/data";

const useQuiz = (quizTitle) => {
  const { currentQuestionIndex, setCurrentQuestionIndex } = useContext(QuestionContext);

  const { questions = [] } = data.quizzes.find((quiz) => quiz.title === quizTitle);

  const nextQuestion = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return {
    lengthOfQuestions: questions.length,
    currentQuestion,
    currentQuestionIndex,
    nextQuestion,
    hasMoreQuestions: currentQuestionIndex < questions.length - 1,
  };
};

export default useQuiz;
