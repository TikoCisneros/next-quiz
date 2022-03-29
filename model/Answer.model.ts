import { AnswerResp } from '../interfaces/ApiResponse';

export default class AnswerModel {
  #value: string;
  #right: boolean;
  #shown: boolean;

  constructor(value: string, right: boolean, shown: boolean = false) {
    this.#value = value;
    this.#right = right;
    this.#shown = shown;
  }

  static right(value: string): AnswerModel {
    return new AnswerModel(value, true);
  }
  
  static wrong(value: string): AnswerModel {
    return new AnswerModel(value, false);
  }

  get value(): string {
    return this.#value;
  }

  get isRightAnswer(): boolean {
    return this.#right;
  }

  get wasShown(): boolean {
    return this.#shown;
  }

  toObject(): AnswerResp {
    return {
      value: this.#value,
      right: this.#right,
      shown: this.#shown,
    };
  }
}