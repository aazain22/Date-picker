import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const Summary = () => {
  const { state } = useRecurrence();

  return (
    <div className="p-6 bg-gray-100 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Summary</h2>

      <div className="space-y-2">
        <div className="flex justify-between">
          <strong className="text-gray-600">Start Date:</strong>
          <span>{new Date(state.startDate).toLocaleDateString()}</span>
        </div>

        <div className="flex justify-between">
          <strong className="text-gray-600">Start Time:</strong>
          <span>{state.startTime}</span>
        </div>

        <div className="flex justify-between">
          <strong className="text-gray-600">End Time:</strong>
          <span>{state.endTime}</span>
        </div>
      </div>

      {state.repeat ? (
        <div className="space-y-4">
          <div className="flex justify-between">
            <strong className="text-gray-600">Repeats:</strong>
            <span>Every {state.interval} {state.frequency}</span>
          </div>

          {/* Dynamic Pattern Details */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-700">Dynamic Pattern</h3>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between">
                <strong className="text-gray-600">Offset:</strong>
                <span>{state.dynamicPattern.offset}</span>
              </div>
              <div className="flex justify-between">
                <strong className="text-gray-600">Day:</strong>
                <span>{state.dynamicPattern.day}</span>
              </div>
              <div className="flex justify-between">
                <strong className="text-gray-600">Week:</strong>
                <span>{state.dynamicPattern.week}</span>
              </div>
              <div className="flex justify-between">
                <strong className="text-gray-600">Month:</strong>
                <span>{state.dynamicPattern.month}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <strong className="text-gray-600">Repeat:</strong>
          <span>No Repeat</span>
        </div>
      )}
    </div>
  );
};

export default Summary;
