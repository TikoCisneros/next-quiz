import AnswerModel from './Answer.model';
import { QuestionResp } from '../interfaces/ApiResponse';

import { shuffle } from './../helpers/Arrays';

export default class QuestionModel {
  #id: number;
  #question: string;
  #answers: AnswerModel[];
  #guessed: boolean;

  constructor(id: number, question: string, answers: AnswerModel[], guessed: boolean = false) {
    this.#id = id;
    this.#question = question;
    this.#answers = answers;
    this.#guessed = guessed;
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

  get wasGuessed(): boolean {
    return this.#guessed;
  }

  get wasReplied(): boolean {
    return this.#answers.some((answer) => answer.wasShown);
  }

  get wasNotReplied() : boolean {
    return !this.wasReplied;
  }

  answerQuestion(index: number): QuestionModel {
    const isRightAnswer = this.#answers[index].isRight;

    const answers = this.#answers.map((answer, i) => {
      if (index === i || answer.isRight) {
        return answer.showed();
      }
      return answer;
    })

    return new QuestionModel(this.#id, this.#question, answers, isRightAnswer);
  }

  shuffleAnswers(): QuestionModel {
    return new QuestionModel(this.#id, this.#question, shuffle(this.#answers));
  }

  toObject(): QuestionResp {
    return {
      id: this.#id,
      question: this.#question,
      guessed: this.wasGuessed,
      replied: this.wasReplied,
      answers: this.#answers.map(answer => answer.toObject()),
    };
  }
}
