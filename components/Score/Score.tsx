import Button from '../common/Button'
import Stat from './Stat'

interface ScoreProps {
  totalQuestions: number; 
  rightAnswers: number; 
  percent: string;
}

const Score = ({ totalQuestions, rightAnswers, percent }: ScoreProps) => {
  return (
    <>
      <h1 className="text-7xl font-extrabold">Survey Score</h1>
      <div className="flex mt-10 mb-4">
        <Stat label="Questions" value={totalQuestions} bgColor="#22d3ee" />
        <Stat label="Right" value={rightAnswers} bgColor="#34d399" />
        <Stat label="Percent" value={percent} />
      </div>
      <div className="flex justify-between">
        <Button href="/quiz" text="Try again!" />
        <Button href="/" text="Finish!" />
      </div>
    </>
  )
}

export default Score