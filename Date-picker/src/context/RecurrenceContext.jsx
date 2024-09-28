import React, { createContext, useReducer, useContext } from 'react';

const RecurrenceContext = createContext();

const recurrenceReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASK_NAME':
        return { ...state, taskName: action.payload };
    case 'SET_DATE':
      return { ...state, startDate: action.payload };
    case 'SET_START_TIME':
      return { ...state, startTime: action.payload };
    case 'SET_END_TIME':
      return { ...state, endTime: action.payload };
    case 'SET_REPEAT':
      return { ...state, repeat: action.payload };
    case 'SET_FREQUENCY':
      return { ...state, frequency: action.payload };
    case 'SET_INTERVAL':
      return { ...state, interval: action.payload };
    case 'SET_DYNAMIC_PATTERN':
      return { ...state, dynamicPattern: { ...state.dynamicPattern, ...action.payload } };
    default:
      return state;
  }
};

const initialState = {
  startDate: new Date(),
  startTime: '06:00',
  endTime: '06:30',
  repeat: false,
  frequency: 'years',
  interval: 1,
  dynamicPattern: {
    offset: 0,
    day: 'Monday',
    week: 'First',
    month: 'February',
  },
  taskName: '', 
};

export const RecurrenceProvider = ({ children }) => {
  const [state, dispatch] = useReducer(recurrenceReducer, initialState);

  return (
    <RecurrenceContext.Provider value={{ state, dispatch }}>
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => {
  const context = useContext(RecurrenceContext);
  if (!context) {
    throw new Error('useRecurrence must be used within a RecurrenceProvider');
  }
  return context;
};
