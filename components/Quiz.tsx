import Question from './Question';
import Button from './common/Button';
import QuestionModel from '../model/Question.model';

interface QuizProps {
  question: QuestionModel;
  isLastQuestion: boolean;
  onAnswer: (question: QuestionModel) => void;
  onNextStep: () => void;
}

const Quiz = ({
  question,
  isLastQuestion,
  onAnswer,
  onNextStep,
}: QuizProps) => {
  const handleAnswerClick = (index: number) => question.wasNotReplied && onAnswer(question.answerQuestion(index));

  return (
    <>
      <Question
        data={question}
        onAnswerClick={handleAnswerClick}
        countdownTime={10}
        onCountdownComplete={onNextStep}
      />
      <Button text={isLastQuestion ? 'Finish' : 'Next'} onClick={onNextStep} />
    </>
  );
};

export default Quiz;
