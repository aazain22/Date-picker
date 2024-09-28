import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const DynamicPattern = () => {
  const { state, dispatch } = useRecurrence();

  const handleDynamicPatternChange = (key, value) => {
    dispatch({ type: 'SET_DYNAMIC_PATTERN', payload: { [key]: value } });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-700">Dynamic Pattern</h3>

      {/* Offset */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-600 mb-1">Every: </label>
        <input
          type="number"
          value={state.dynamicPattern.offset}
          onChange={(e) =>
            handleDynamicPatternChange('offset', parseInt(e.target.value, 10))
          }
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Day */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-600 mb-1">Day:</label>
        <input
          type="text"
          value={state.dynamicPattern.day}
          onChange={(e) => handleDynamicPatternChange('day', e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Week */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-600 mb-1">Week:</label>
        <input
          type="text"
          value={state.dynamicPattern.week}
          onChange={(e) => handleDynamicPatternChange('week', e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Month */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-600 mb-1">Month:</label>
        <input
          type="text"
          value={state.dynamicPattern.month}
          onChange={(e) => handleDynamicPatternChange('month', e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default DynamicPattern;
