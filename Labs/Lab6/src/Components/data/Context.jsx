import { createContext, useState } from "react";

export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addHistory = (score, startTime) => {
    setHistory((prevHistory) => [...prevHistory, { score, startTime }]);
  };

  return (
    <HistoryContext.Provider value={{ history, addHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
