import Statement from './Statement';
import Answer from './Answer';

import QuestionModel from '../../model/Question.model';

const LITERALS = ['A', 'B', 'C', 'D'];

interface QuestionProps {
  data: QuestionModel;
  onAnswerClick: (index: number) => void;
}

const Question = ({ data, onAnswerClick }: QuestionProps) => {
  return (
    <div className="flex flex-col items-center">
      <Statement text={data.question} />
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