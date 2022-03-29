import AnswerModel from '../model/Answer.model';
import QuestionModel from '../model/Question.model';

const APP_SURVEY: QuestionModel[] = [
  new QuestionModel(10, 'Which of the following is the correct name of React.js?', [
    AnswerModel.wrong('React'),
    AnswerModel.wrong('React.js'),
    AnswerModel.wrong('ReactJS'),
    AnswerModel.right('All of the above'),
  ]),
  new QuestionModel(20, 'Which of the following command is used to install create-react-app?', [
    AnswerModel.wrong('npm install create-react-app'),
    AnswerModel.wrong('npm install -f create-react-app'),
    AnswerModel.wrong('npm install create-react-app'),
    AnswerModel.right('npm install -g create-react-app'),
  ]),
  new QuestionModel(30, 'What of the following is used in React.js to increase performance?', [
    AnswerModel.wrong('Original DOM'),
    AnswerModel.wrong('Both Original & Virtual DOM'),
    AnswerModel.wrong('None'),
    AnswerModel.right('Virtual DOM'),
  ]),
  new QuestionModel(40, 'Which of the following acts as the input of a class-based component?', [
    AnswerModel.wrong('Class'),
    AnswerModel.wrong('Factory'),
    AnswerModel.wrong('Render'),
    AnswerModel.right('Props'),
  ]),
  new QuestionModel(50, 'Which of the following keyword is used to create a class inheritance?', [
    AnswerModel.wrong('Create'),
    AnswerModel.wrong('Inherits'),
    AnswerModel.wrong('This'),
    AnswerModel.right('Extends'),
  ]),
  new QuestionModel(60, 'How many numbers of elements a valid react component can return?', [
    AnswerModel.wrong('5'),
    AnswerModel.wrong('2'),
    AnswerModel.wrong('4'),
    AnswerModel.right('1'),
  ]),
  new QuestionModel(70, 'What is the declarative way to render a dynamic list of components based on values in an array?', [
    AnswerModel.wrong('Using the reduce array method'),
    AnswerModel.wrong('Using the <Each /> component'),
    AnswerModel.wrong('With a for/while loop'),
    AnswerModel.right('Using the Array.map() method'),
  ]),
  new QuestionModel(80, 'What is a state in React?', [
    AnswerModel.wrong('A permanent storage'),
    AnswerModel.wrong('External storage of the component'),
    AnswerModel.wrong('None'),
    AnswerModel.right('Internal storage of the component'),
  ]),
  new QuestionModel(90, 'What are the two ways to handle data in React?', [
    AnswerModel.wrong('Services & Components'),
    AnswerModel.wrong('State & Services'),
    AnswerModel.wrong('State & Components'),
    AnswerModel.right('State & Props'),
  ]),
  new QuestionModel(100, 'Does React.js create a VIRTUAL DOM in the memory?', [
    AnswerModel.wrong('Cannot say'),
    AnswerModel.wrong('False'),
    AnswerModel.wrong('Can be true or false'),
    AnswerModel.right('True'),
  ]),
  new QuestionModel(101, 'Which of the following is used to pass data to a component from outside in React.js?', [
    AnswerModel.wrong('PropTypes'),
    AnswerModel.wrong('SetState'),
    AnswerModel.wrong('Render with arguments'),
    AnswerModel.right('Props'),
  ]),
  new QuestionModel(102, 'Which of the following function is used to change the state of the React.js component?', [
    AnswerModel.wrong('this.setChangeState'),
    AnswerModel.wrong('this.State{}'),
    AnswerModel.wrong('None'),
    AnswerModel.right('this.setState'),
  ]),
  new QuestionModel(103, 'What is true for the keys given to a list of elements in React?', [
    AnswerModel.wrong('Unique in the DOM'),
    AnswerModel.wrong('Do not require to be unique'),
    AnswerModel.wrong('None'),
    AnswerModel.right('Unique among the siblings only'),
  ]),
  new QuestionModel(104, 'What function allows you to render React content in an HTML page?', [
    AnswerModel.wrong('React.mount()'),
    AnswerModel.wrong('ReactDOM.start()'),
    AnswerModel.wrong('React.render()'),
    AnswerModel.right('ReactDOM.render()'),
  ]),
  new QuestionModel(105, 'Which hook allows us to replicate lifecycle methods within our function components?', [
    AnswerModel.wrong('useLifecycle'),
    AnswerModel.wrong('usePureFunction'),
    AnswerModel.wrong('useState'),
    AnswerModel.right('useEffect'),
  ]),
  new QuestionModel(106, 'Which hook should we use if we are dealing with complex state within a function component?', [
    AnswerModel.wrong('useEffect'),
    AnswerModel.wrong('useReducer'),
    AnswerModel.wrong('useComplexState'),
    AnswerModel.right('useState'),
  ]),
];

export default APP_SURVEY;