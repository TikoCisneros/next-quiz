import type { NextPage } from 'next';

import Button from '../components/common/Button';

const Home: NextPage = () => {
  return <Button text="Start survey" href="/quiz" />;
}

export default Home;
