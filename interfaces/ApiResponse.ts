export interface QuestionResp {
  id: number;
  question: string;
  answers: AnswerResp[];
  guessed: boolean;
  replied: boolean;
}

export interface AnswerResp {
  text: string;
  right: boolean;
  show: boolean;
}

export interface MessageResp {
  message: string;
}
