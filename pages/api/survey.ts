import type { NextApiRequest, NextApiResponse } from 'next';
import { MessageResp } from '../../interfaces/ApiResponse';

import APP_SURVEY from '../../data/Survey';
import { shuffle, sliceElements } from './../../helpers/Arrays';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<number[] | MessageResp>
) {
  const { method } = req;

  if (method !== 'GET') {
    res.status(405).send({ message: 'Method Not Allowed!' });
    return;
  }

  const questions = APP_SURVEY.map((question) => question.id);
  const shuffledQuestions = shuffle(questions);

  res.status(200).json(sliceElements(shuffledQuestions, 10));
}
