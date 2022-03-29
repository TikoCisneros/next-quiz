export default class AnswerModel {
  #value: string;
  #rightAnswer: boolean;
  #shown: boolean;

  constructor(value: string, rightAnswer: boolean, shown: boolean = false) {
    this.#value = value;
    this.#rightAnswer = rightAnswer;
    this.#shown = shown;
  }

  get value(): string {
    return this.#value;
  }

  get isRightAnswer(): boolean {
    return this.#rightAnswer;
  }

  get wasShown(): boolean {
    return this.#shown;
  }
}