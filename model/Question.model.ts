import AnswerModel from './Answer.model';
import { QuestionResp } from '../interfaces/ApiResponse';

import { shuffle } from './../helpers/Arrays';

export default class QuestionModel {
  #id: number;
  #question: string;
  #answers: AnswerModel[];
  #correct: boolean;
  //#replied: boolean;

  constructor(id: number, question: string, answers: AnswerModel[], correct: boolean = false) {
    this.#id = id;
    this.#question = question;
    this.#answers = answers;
    this.#correct = correct;
  }

  
  get id(): number {
    return this.#id;
  }
  
  get question(): string {
    return this.#question;
  }
  
  get answers(): AnswerModel[] {
    return this.#answers;
  }

  get isCorrect(): boolean {
    return this.#correct;
  }

  get wasReplied(): boolean {
    return this.#answers.some((answer) => answer.wasShown);
  }

  shuffleAnswers(): QuestionModel {
    return new QuestionModel(this.#id, this.#question, shuffle(this.#answers));
  }

  toObject(): QuestionResp {
    return {
      id: this.#id,
      question: this.#question,
      answers: this.#answers.map(answer => answer.toObject()),
      correct: this.#correct,
    };
  }
}
