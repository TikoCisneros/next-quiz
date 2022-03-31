import type { NextPage } from 'next';
import { useState } from 'react';

import Quiz from '../components/Quiz';
import QuestionModel from '../model/Question.model';

import APP_SURVEY from '../data/Survey';

const Home: NextPage = () => {
  const [question, setQuestion] = useState(APP_SURVEY[3])

  const handleAnswerQuestion = (question: QuestionModel) => {};

  const handleNextStep = () => {};

  return (
    <Quiz
      question={question}
      isLastQuestion={false}
      onAnswer={handleAnswerQuestion}
      onNextStep={handleNextStep}
    />
  );
}

export default Home;
