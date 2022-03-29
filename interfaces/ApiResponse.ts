export interface QuestionResp {
  id: number;
  question: string;
  answers: AnswerResp[];
  correct: boolean;
}

export interface AnswerResp {
  value: string;
  right: boolean;
  shown: boolean;
}

export interface MessageResp {
  message: string;
}
