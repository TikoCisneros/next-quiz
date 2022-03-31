import Statement from './Statement';
import Answer from './Answer';
import Countdown from './Countdown';

import QuestionModel from '../../model/Question.model';

const LITERALS = ['A', 'B', 'C', 'D'];

interface QuestionProps {
  data: QuestionModel;
  onAnswerClick: (index: number) => void;
  countdownTime?: number;
  onCountdownComplete: () => void;
}

const Question = ({ data, onAnswerClick, countdownTime = 60, onCountdownComplete }: QuestionProps) => {
  return (
    <div className="flex flex-col items-center">
      <Statement text={data.question} />
      <Countdown duration={countdownTime} onComplete={onCountdownComplete} />
      {data.answers.map((answer, index) => (
        <Answer
          key={`a-${index}`}
          data={answer}
          index={index}
          literal={LITERALS[index]}
          onClick={onAnswerClick}
        />
      ))}
    </div>
  )
}

export default Question;