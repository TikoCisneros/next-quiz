import { NextPage } from 'next';
import { useRouter } from 'next/router';
import ScoreComponent from '../components/Score';

import { getQuizPercent } from '../helpers/Quiz';

const Score: NextPage = () => {
  const {
    query: { totalQuestions, rightAnswers },
  } = useRouter();

  if (!totalQuestions || !rightAnswers) {
    return null;
  }

  const percent = getQuizPercent(+totalQuestions, +rightAnswers);

  return (
    <ScoreComponent
      totalQuestions={+totalQuestions}
      rightAnswers={+rightAnswers}
      percent={percent}
    />
  );
};

export default Score;
