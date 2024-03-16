import { useState, useEffect } from "react";

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="alert alert-info" role="alert">
      Current Date and Time: {currentDateTime.toLocaleString()}
    </div>
  );
};

export default DateTimeDisplay;
