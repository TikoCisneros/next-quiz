import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import QuizComponent from '../components/Quiz';
import QuestionModel from '../model/Question.model';

import { fetchQuestionByID, fetchSurvey } from '../api';
import Loader from '../components/common/Loader';
import { createAdaptedQuestion } from '../adapters/Quiz';
import { getNextQuestionID, isLastQuestion } from '../helpers/Quiz';

const Quiz: NextPage = () => {
  const [surveyIDs, setSurveyIDs] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel | null>(null);
  const [rightAnswers, setRightAnswers] = useState<number>(0);
  const { push } = useRouter();

  useEffect(() => {
    if (surveyIDs.length > 0) {
      loadQuestion(surveyIDs[0]);
      return;
    }
    loadSurvey();
  }, [surveyIDs]);

  const loadSurvey = async () => {
    const { data } = await fetchSurvey();
    setSurveyIDs(data);
  }

  const loadQuestion = async (id: number) => {
    const { data } = await fetchQuestionByID(id);
    setQuestion(createAdaptedQuestion(data));
  }

  const handleAnswerQuestion = (question: QuestionModel) => {
    if (question.wasGuessed)  {
      setRightAnswers(rightAnswers + 1);
    }
    setQuestion(question);
  }

  const handleNextStep = () => {
    const nextQuestionID = getNextQuestionID(surveyIDs, question!.id);
    if (nextQuestionID) {
      goToNextQuestion(nextQuestionID);
      return;
    }
    exitQuiz();
  };

  const goToNextQuestion = (id: number) => loadQuestion(id);

  const exitQuiz = () => push({ pathname: '/score', query: { totalQuestions: surveyIDs.length,  rightAnswers } });

  if (surveyIDs.length === 0 || !question) {
    return <Loader />;
  }

  return (
    <QuizComponent
      question={question}
      isLastQuestion={isLastQuestion(surveyIDs, question.id)}
      onAnswer={handleAnswerQuestion}
      onNextStep={handleNextStep}
    />
  );
}

export default Quiz;