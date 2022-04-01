import Image from 'next/image';
import Button from './common/Button';

const Home = () => {
  return (
    <>
      <div className="animate-spin-slow">
        <Image src="/react.svg" alt="react-logo" width={350} height={350} />
      </div>
      <span className="text-7xl font-extrabold">ReactJS Quiz</span>
      <p className="text-2xl italic my-4">
        Test your knowledge of the world's most used library 
      </p>
      <Button text="Start survey" href="/quiz" />
    </>
  )
}

export default Home;