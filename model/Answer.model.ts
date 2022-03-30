import { AnswerResp } from '../interfaces/ApiResponse';

export default class AnswerModel {
  #text: string;
  #right: boolean;
  #show: boolean;

  constructor(text: string, right: boolean, show: boolean = false) {
    this.#text = text;
    this.#right = right;
    this.#show = show;
  }

  static right(value: string): AnswerModel {
    return new AnswerModel(value, true);
  }
  
  static wrong(value: string): AnswerModel {
    return new AnswerModel(value, false);
  }

  get text(): string {
    return this.#text;
  }

  get isRight(): boolean {
    return this.#right;
  }

  get wasShown(): boolean {
    return this.#show;
  }

  showed(): AnswerModel {
    return new AnswerModel(this.#text, this.#right, true);
  }

  toObject(): AnswerResp {
    return {
      text: this.#text,
      right: this.#right,
      show: this.#show,
    };
  }
}