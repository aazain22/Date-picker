import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const DateInput = () => {
  const { state, dispatch } = useRecurrence();

  const handleDateChange = (e) => {
    dispatch({ type: 'SET_DATE', payload: e.target.value });
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-600">Select Date:</label>
      <input
        type="date"
        value={state.startDate}
        onChange={handleDateChange}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DateInput;
