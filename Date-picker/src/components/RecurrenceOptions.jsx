import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const RecurrenceOptions = () => {
  const { state, dispatch } = useRecurrence();

  const handleRepeatChange = (e) => {
    dispatch({ type: 'SET_REPEAT', payload: e.target.checked });
  };

  const handleFrequencyChange = (e) => {
    dispatch({ type: 'SET_FREQUENCY', payload: e.target.value });
  };

  const handleIntervalChange = (e) => {
    dispatch({ type: 'SET_INTERVAL', payload: parseInt(e.target.value, 10) });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={state.repeat}
          onChange={handleRepeatChange}
          className="mr-2 h-4 w-4"
        />
        <label className="text-sm font-medium text-gray-600">Repeat:</label>
      </div>

      {state.repeat && (
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-600">Every:</label>
          <input
            type="number"
            value={state.interval}
            onChange={handleIntervalChange}
            className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-20"
          />
          <select
            value={state.frequency}
            onChange={handleFrequencyChange}
            className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="days">Days</option>
            <option value="weeks">Weeks</option>
            <option value="months">Months</option>
            <option value="years">Years</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default RecurrenceOptions;
