import { AnswerResp } from '../interfaces/ApiResponse';

export default class AnswerModel {
  #value: string;
  #right: boolean;
  #show: boolean;

  constructor(value: string, right: boolean, show: boolean = false) {
    this.#value = value;
    this.#right = right;
    this.#show = show;
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

  get isRight(): boolean {
    return this.#right;
  }

  get wasShown(): boolean {
    return this.#show;
  }

  showed(): AnswerModel {
    return new AnswerModel(this.#value, this.#right, true);
  }

  toObject(): AnswerResp {
    return {
      value: this.#value,
      right: this.#right,
      show: this.#show,
    };
  }
}