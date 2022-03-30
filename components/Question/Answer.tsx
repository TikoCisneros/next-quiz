// Based on https://www.w3schools.com/howto/howto_css_flip_card.asp
import AnswerModel from '../../model/Answer.model';

interface AnswerTextProps {
  text: string;
  isBack?: boolean; 
}

const AnswerText = ({ text, isBack }: AnswerTextProps) => (
  <span className={`${ isBack ? 'text-3xl' : 'text-xl'} font-bold ml-4 text-slate-700`}>
    {text}
  </span>
);

interface AnswerProps {
  data: AnswerModel;
  index: number;
  literal: string;
  onClick: (index: number) => void;
}

const Answer = ({ index ,data, literal, onClick }: AnswerProps) => {
  const handleClick = () => onClick(index);

  const renderBody = () => {
    if (!data.wasShown) {
      return (
        <div className="flex h-full w-full absolute items-center bg-white rounded-xl px-4">
          <span className="flex justify-center items-center w-[40px] h-[40px] text-xl font-extrabold bg-amber-500 rounded-full">
            {literal}
          </span>
          <AnswerText text={data.text} />
        </div>
      );
    }

    return (
      <div className="flex h-full w-full absolute">
        <div className={`flex flex-col flex-1 justify-center items-center rounded-xl ${data.isRight ? 'bg-emerald-400' : 'bg-red-300'}`}>
          <span className="text-slate-700">
            {data.isRight ? 'The right answer is...' : 'Your answer is wrong!'}
          </span>
          <AnswerText text={data.text} isBack/>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[100px] m-[10px] w-[80%] min-w-[320px]" onClick={handleClick}>
      <div className="flex flex-1 relative">
        {renderBody()}
      </div>
    </div>
  )
}

export default Answer;