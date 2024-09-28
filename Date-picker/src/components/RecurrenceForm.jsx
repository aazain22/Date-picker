import React, { useState } from "react";
import DateInput from "./DateInput";
import TimeInput from "./TimeInput";
import RecurrenceOptions from "./RecurrenceOptions";
import DynamicPattern from "./DynamicPattern";
import Summary from "./Summary";
import TaskNameInput from "./TaskNameInput";
import { useRecurrence } from "../context/RecurrenceContext";

const RecurrenceForm = () => {
  const { state } = useRecurrence();
  const [recurrenceMessage, setRecurrenceMessage] = useState("");

  const getReadableRecurrenceMessage = (state) => {
    const { dynamicPattern, frequency, interval } = state;

    let message = "On ";

    if (frequency === "days") {
      message += `every ${interval} day${interval > 1 ? "s" : ""}`;
    } else if (frequency === "weeks") {
      message += `every ${interval} week${interval > 1 ? "s" : ""}`;
      if (dynamicPattern.day) {
        message += ` on ${dynamicPattern.day}`;
      }
    } else if (frequency === "months") {
      message += `every ${interval} month${interval > 1 ? "s" : ""}`;
      if (dynamicPattern.day) {
        message += ` on the ${dynamicPattern.offset} ${dynamicPattern.day}`;
      }
    } else if (frequency === "years") {
      message += `every ${interval} year${interval > 1 ? "s" : ""}`;
      if (dynamicPattern.month && dynamicPattern.day) {
        message += ` on the first ${dynamicPattern.day} of ${dynamicPattern.month}`;
      }
    }

    return message;
  };

  const handleSubmit = () => {
    const message = getReadableRecurrenceMessage(state);
    setRecurrenceMessage(message); // Set the message to be displayed
    alert("Recurrence saved successfully!");
  };

  return (
    <div className="p-6 space-y-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-semibold">Recurrence Form</h1>

      {/* Task Name Input */}
      <TaskNameInput />

      {/* Date Picker */}
      <DateInput />

      {/* Time Picker */}
      <TimeInput />

      {/* Recurrence Options */}
      <RecurrenceOptions />

      {/* Dynamic Pattern */}
      <DynamicPattern />

      {/* Summary */}
      <Summary />

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          Save Recurrence
        </button>
      </div>

      {/* Display the human-readable recurrence message */}
      {recurrenceMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          <strong>Recurrence Saved: </strong>
          {recurrenceMessage}
        </div>
      )}
    </div>
  );
};

export default RecurrenceForm;
