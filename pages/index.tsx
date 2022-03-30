import type { NextPage } from 'next';
import { useState } from 'react';

import Question from '../components/Question';
import APP_SURVEY from '../data/Survey';

const Home: NextPage = () => {
  const [question, setQuestion] = useState(APP_SURVEY[3])

  return (<Question data={question} onAnswerClick={(index) => setQuestion(question.answerQuestion(index))} />);
}

export default Home
