import Answer from './Answer';
import Statement from './Statement';

interface QuestionProps {}

const Question = (props: QuestionProps) => {
  return (
    <div className="flex flex-col">
      <Statement />
      <Answer />
    </div>
  )
}

export default Question;