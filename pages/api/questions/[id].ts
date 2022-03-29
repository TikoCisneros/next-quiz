import type { NextApiRequest, NextApiResponse } from 'next';

import APP_SURVEY from '../../../data/Survey';
import { QuestionResp, MessageResp } from './../../../interfaces/ApiResponse';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionResp | MessageResp>
) {
  const { method } = req;

  if (method !== 'GET') {
    res.status(405).send({ message: 'Method Not Allowed!' });
    return;
  }

  const { query: { id: questionId } } = req

  const filteredQuestions = APP_SURVEY.filter((question) => question.id === +questionId);

  if (filteredQuestions.length === 1) {
    res.status(200).json(filteredQuestions[0].shuffleAnswers().toObject());
    return;
  }

  res.status(404).send({ message: 'Question not found!' });
}
