import { useEffect, useRef, useState } from "react";
import "./AnswerTimer.scss";

const AnswerTimer = (props: { duration: number; onTimeUp: () => void }) => {
  const [counter, setCounter] = useState<number>(0);
  const [processLoaded, setProcessLoaded] = useState<number>(0);
  const intervalRef = useRef<number>(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((current) => current + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    setProcessLoaded((counter / props.duration) * 100);

    if (counter === props.duration) {
      clearInterval(intervalRef.current);

      setTimeout(props.onTimeUp, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <>
      <div className="answer-timer-container">
        <div
          style={{
            width: `${processLoaded}%`,
            backgroundColor:
              processLoaded < 40
                ? "lightgreen"
                : processLoaded < 80
                ? "orange"
                : "red",
          }}
          className="prgoress"
        >
        </div>
      </div>
    </>
  );
};

export default AnswerTimer;