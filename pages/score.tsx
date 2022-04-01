import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Stat from '../components/Stat';
import Button from '../components/common/Button';
import { getQuizPercent } from '../helpers/Quiz';

const Score: NextPage = () => {
  const { query: { totalQuestions, rightAnswers } } = useRouter();

  if (!totalQuestions || !rightAnswers) {
    return null;
  }

  const percent = getQuizPercent(+totalQuestions, +rightAnswers);

  return (
    <>
      <h1 className="text-5xl font-extrabold">Survey Score</h1>
      <div className="flex my-10">
        <Stat label="Questions" value={+totalQuestions} bgColor="#22d3ee" />
        <Stat label="Right" value={+rightAnswers} bgColor="#34d399" />
        <Stat label="Percent" value={percent} />
      </div>
      <Button href="/quiz" text="Try again!" />
    </>
  )
}

export default Score;