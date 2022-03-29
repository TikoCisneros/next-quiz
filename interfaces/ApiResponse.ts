export interface QuestionResp {
  id: number;
  question: string;
  answers: AnswerResp[];
  guessed: boolean;
  replied: boolean;
}

export interface AnswerResp {
  value: string;
  right: boolean;
  show: boolean;
}

export interface MessageResp {
  message: string;
}
