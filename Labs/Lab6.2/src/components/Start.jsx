import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startQuiz } from "../redux/action/quizAction";
const Start = () => {
  const dispatch = useDispatch();
  // const {time} = useSelector(state => state.quizReducer)
  const [minute, setMinute] = useState(1);
  const [second, setSecond] = useState(0);
  const [time, setTime] = useState(60);
  const handleQuizStart = () => {
    dispatch(startQuiz(time));
  };
  useEffect(() => {
    if (minute > 59) {
      setMinute(1);
    }
    if (second > 59) {
      setSecond(1);
    }
  }, [minute, second]);
  useEffect(() => {
    console.log(minute);
    console.log(typeof minute);
    if (minute !== NaN && second !== NaN) {
      setTime(minute * 60 + second);
    }
  }, [minute, second]);
  return (
    <div className="startBox">
      <div>
        <div>
          <h1>Start the Quiz</h1>
          <p>Good luck!</p>
          <p>Time:&nbsp;&nbsp;{time}sec</p>
          <section>
            <label htmlFor="">
              <input
                type="number"
                className="timeInput"
                value={minute}
                onChange={(e) => setMinute(parseInt(e.target.value))}
              />
              min
            </label>
            <label htmlFor="">
              <input
                type="number"
                className="timeInput"
                value={second}
                onChange={(e) => setSecond(parseInt(e.target.value))}
              />
              sec
            </label>
          </section>
          <button className="startButton" onClick={handleQuizStart}>
            START
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
