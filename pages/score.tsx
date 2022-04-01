import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getQuizPercent } from '../helpers/Quiz';

const Score: NextPage = () => {
  const { query: { totalQuestions, rightAnswers } } = useRouter();

  if (!totalQuestions || !rightAnswers) {
    return null;
  }

  const percent = getQuizPercent(+totalQuestions, +rightAnswers);

  return (
    <div>
      <h1>Survey Score</h1>
      <div>{totalQuestions}</div>
      <div>{rightAnswers}</div>
      <div>{percent}</div>
    </div>
  )
}

export default Score;