// Based on https://www.w3schools.com/howto/howto_css_flip_card.asp
import AnswerModel from '../../model/Answer.model';

interface AnswerProps {
  data: AnswerModel;
  index: number;
  literal: string;
  onClick: (index: number) => void;
}

const Answer = ({ index ,data, literal, onClick }: AnswerProps) => {
  const handleClick = () => onClick(index);

  return (
    <div className="flex h-[100px] m-[10px] w-[80%] min-w-[320px]" onClick={handleClick}>
      <div className="flex flex-1 relative">
        <div className="flex h-full w-full absolute items-center bg-white rounded-xl px-4">
          <span className="flex justify-center items-center w-[40px] h-[40px] text-xl font-extrabold bg-amber-500 rounded-full">
            {literal}
          </span>
          <span className="text-slate-700 text-xl font-bold ml-4">
            {data.text}
          </span>
        </div>
        <div className="flex h-full w-full absolute">

        </div>
      </div>
    </div>
  )
}

export default Answer;