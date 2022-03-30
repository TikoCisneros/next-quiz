import type { NextPage } from 'next';

import Question from '../components/Question';
import APP_SURVEY from '../data/Survey';

const Home: NextPage = () => {
  return (<Question data={APP_SURVEY[3]} />);
}

export default Home
