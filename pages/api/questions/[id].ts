import type { NextApiRequest, NextApiResponse } from 'next';

import APP_SURVEY from '../../../data/Survey';
import { QuestionResp } from './../../../interfaces/ApiResponse';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionResp>
) {
  const { query: { id } } = req;

  console.info('ID', id);

  res.status(200).json(APP_SURVEY[0].toObject());
}
