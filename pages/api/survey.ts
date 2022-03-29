import type { NextApiRequest, NextApiResponse } from 'next';
import APP_SURVEY from '../../data/Survey';
import { MessageResp } from '../../interfaces/ApiResponse';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<number[] | MessageResp>
) {
  const { method } = req;

  if (method !== 'GET') {
    res.status(405).send({ message: 'Method Not Allowed!' });
    return;
  }

  res.status(200).json(APP_SURVEY.map((question) => question.id));
}
