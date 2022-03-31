import type { NextPage } from 'next';
import { useState } from 'react';

import Question from '../components/Question';
import APP_SURVEY from '../data/Survey';

const Home: NextPage = () => {
  const [question, setQuestion] = useState(APP_SURVEY[3])

  const handleCountdownComplete = () => question.wasNotReplied && setQuestion(question.answerQuestion(0));

  return (
    <Question
      data={question}
      onAnswerClick={(index) => setQuestion(question.answerQuestion(index))}
      countdownTime={10}
      onCountdownComplete={handleCountdownComplete}
    />
  );
}

export default Home
