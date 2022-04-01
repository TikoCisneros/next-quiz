import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { toTimeFormat } from '../../helpers/Time';

interface CountdownProps {
  key: string | number;
  duration: number;
  onComplete: () => void;
}

const Countdown = ({ key, duration, onComplete }: CountdownProps) => {
  return (
    <div className="my-4">
      <CountdownCircleTimer
        key={key}
        isPlaying
        size={100}
        colors={['#22c55e', '#facc15', '#f87171', '#ef4444']}
        colorsTime={[duration / 2, duration / 3, duration / 5, 0]}
        duration={duration}
        onComplete={onComplete}
      >
        {({ remainingTime }) => (
          <span className="text-xl">{toTimeFormat(remainingTime)}</span>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default Countdown;
