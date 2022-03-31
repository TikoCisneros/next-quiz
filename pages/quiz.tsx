import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import QuizComponent from '../components/Quiz';
import QuestionModel from '../model/Question.model';

import { fetchQuestionByID, fetchSurvey } from '../api';
import Loader from '../components/common/Loader';

const Quiz: NextPage = () => {
  const [survey, setSurvey] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel | null>(null);

  useEffect(() => {
    if (survey.length > 0) {
      loadQuestion(survey[0]);
      return;
    }

    loadSurvey();
  }, [survey]);

  const loadSurvey = async () => {
    const { data } = await fetchSurvey();
    setSurvey(data);
  }

  const loadQuestion = async (id: number) => {
    const { data } = await fetchQuestionByID(id);
    console.info(data);
  }

  const handleAnswerQuestion = (question: QuestionModel) => {};

  const handleNextStep = () => {};

  if (!question) {
    return <Loader />;
  }

  return (
    <QuizComponent
      question={question}
      isLastQuestion={false}
      onAnswer={handleAnswerQuestion}
      onNextStep={handleNextStep}
    />
  );
}

export default Quiz;