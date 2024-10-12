import { createContext, useState } from "react";
import PropTypes from "prop-types";

const QuestionContext = createContext({
  currentQuestionIndex: 0,
  setCurrentQuestionIndex: () => {},
  correctAnswerCount: 0,
  setCorrectAnswerCount: () => {},
  totalQuestionCount: 0,
  setTotalQuestionCount: () => {},
});

const QuestionProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [totalQuestionCount, setTotalQuestionCount] = useState(0);

  return (
    <QuestionContext.Provider
      value={{
        currentQuestionIndex,
        setCurrentQuestionIndex,
        correctAnswerCount,
        setCorrectAnswerCount,
        totalQuestionCount,
        setTotalQuestionCount,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

QuestionProvider.propTypes = {
  children: PropTypes.element,
};

export { QuestionContext, QuestionProvider };
