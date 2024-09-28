import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const TimeInput = () => {
  const { state, dispatch } = useRecurrence();

  const handleStartTimeChange = (e) => {
    dispatch({ type: 'SET_START_TIME', payload: e.target.value });
  };

  const handleEndTimeChange = (e) => {
    dispatch({ type: 'SET_END_TIME', payload: e.target.value });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">From:</label>
        <input
          type="time"
          value={state.startTime}
          onChange={handleStartTimeChange}
          className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">To:</label>
        <input
          type="time"
          value={state.endTime}
          onChange={handleEndTimeChange}
          className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>
    </div>
  );
};

export default TimeInput;
