import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import QuizComponent from '../components/Quiz';
import QuestionModel from '../model/Question.model';

import APP_SURVEY from '../data/Survey';
import { fetchQuestionByID, fetchSurvey } from '../helpers/Api';
import Loader from '../components/common/Loader';

const Quiz: NextPage = () => {
  const [survey, setSurvey] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel | null>(null);

  const loadSurvey = async () => {
    const { data } = await fetchSurvey();
    setSurvey(data);
  }

  useEffect(() => {
    loadSurvey();
  }, []);

  const loadQuestion = async (id: number) => {
    const { data } = await fetchQuestionByID(id);
    console.info(data);
  }

  useEffect(() => {
    if (survey.length > 0) {
      loadQuestion(survey[0]);
    }
  }, [survey]);

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