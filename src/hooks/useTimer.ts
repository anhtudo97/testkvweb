import { useRef, useState, useEffect } from 'react';

export const useCountdown = (seconds: number): number => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    let frameId: number;
    let startTime: number;

    function frame(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const timeLeft = Math.max(0, seconds - Math.floor(elapsed / 1000));
      setTimeLeft(timeLeft);

      if (timeLeft > 0) {
        frameId = requestAnimationFrame(frame);
      }
    }

    frameId = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(frameId);
  }, [seconds]);

  return timeLeft;
};
