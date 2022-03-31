import { AnswerResp, QuestionResp } from '../interfaces/ApiResponse';
import AnswerModel from '../model/Answer.model';
import QuestionModel from '../model/Question.model';

export const createAdaptedQuestion = (httpQuestion: QuestionResp): QuestionModel => {
  const { id, question, answers: httpAnswers, guessed } = httpQuestion;
  const answers: AnswerModel[] = httpAnswers.map((answer) => createAdaptedAnswer(answer));
  return new QuestionModel(id, question, answers, guessed);
};

export const createAdaptedAnswer = (httpAnswer: AnswerResp): AnswerModel => {
  const { text, right, show } = httpAnswer;
  return new AnswerModel(text, right, show);
};
