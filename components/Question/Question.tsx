import Answer from './Answer';
import Statement from './Statement';

import QuestionModel from '../../model/Question.model';

interface QuestionProps {
  data: QuestionModel;
}

const Question = ({ data }: QuestionProps) => {
  return (
    <div className="flex flex-col items-center">
      <Statement text={data.question} />
      <Answer />
    </div>
  )
}

export default Question;