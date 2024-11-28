import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    if (!habitName.trim()) {
      alert("Habit name cannot be empty!");
      return;
    }

    const newHabit = {
      id: Date.now(),
      habit: habitName,
      completed: false
    };
    onAddHabit(newHabit);
    setHabitName('');
  };

  function handleText(e) {
    setHabitName(e.target.value)
  }

  return (
    //TODO: add a form to add a new habit
    <form>
      <input placeholder="New Habit" type="text" value={habitName} onChange={handleText}/>
      <button onClick={handleSubmit}>Add Habit</button>
    </form>
    
  );
}
