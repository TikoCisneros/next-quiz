import axios from 'axios';
import { QuestionResp } from '../interfaces/ApiResponse';

export const fetchSurvey = async () => axios.get<number[]>('/api/survey');

export const fetchQuestionByID = async (id: number) => axios.get<QuestionResp>(`/api/questions/${id}`);