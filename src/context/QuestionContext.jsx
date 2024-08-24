import { createContext, useState } from "react";

const QuestionContext = createContext({
  currentQuestionIndex: 0,
  setCurrentQuestionIndex: () => {},
  correctAnswerCount: 0,
  setCorrectAnswerCount: () => {},
});

const QuestionProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

  return (
    <QuestionContext.Provider value={{ currentQuestionIndex, setCurrentQuestionIndex, correctAnswerCount, setCorrectAnswerCount }}>
      {children}
    </QuestionContext.Provider>
  );
};

export { QuestionContext, QuestionProvider };
