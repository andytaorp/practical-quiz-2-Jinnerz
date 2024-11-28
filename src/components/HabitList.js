import React from "react";
import Habit from "./Habit";

export default function HabitList({ habits, onToggleHabit, onDeleteHabit }) {
  return (
    <ul style={{ listStyle: "none", padding: "0" }}>
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habits={habit}
          onToggleHabit={onToggleHabit}
          onDeleteHabit={onDeleteHabit}
        />
      ))}
    </ul>
  );
}
