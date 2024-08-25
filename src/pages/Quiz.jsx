import useCategory from "src/hooks/useCategory";
import useQuiz from "src/hooks/useQuiz";

import QuestionStepText from "src/components/common/question-step-text";
import Question from "src/components/common/question";
import Result from "src/components/common/result";

function Quiz(props) {
  const { category } = useCategory();

  const { currentQuestion, hasMoreQuestions } = useQuiz(category);

  if (!currentQuestion) return <p>Quiz not found</p>;

  if (!hasMoreQuestions) return <Result />;

  return (
    <div className="lg:grid lg:grid-cols-2 lg:grid-rows-[60px_1fr] lg:gap-x-32">
      <QuestionStepText />
      <Question quizTitle={category} />
    </div>
  );
}

Quiz.propTypes = {};

export default Quiz;
