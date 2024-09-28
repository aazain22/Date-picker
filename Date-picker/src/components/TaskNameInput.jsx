import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const TaskNameInput = () => {
  const { state, dispatch } = useRecurrence();

  const handleTaskNameChange = (e) => {
    dispatch({ type: 'SET_TASK_NAME', payload: e.target.value });
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-600 mb-1">Task Name:</label>
      <input
        type="text"
        value={state.taskName}
        onChange={handleTaskNameChange}
        placeholder="Enter task name"
        className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
    </div>
  );
};

export default TaskNameInput;
