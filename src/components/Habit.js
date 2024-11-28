import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({onToggleHabit, onDeleteHabit, key, habits}) {
    return(
        <div style={{flexDirection: 'row', display: "flex"}}>
            <input type="checkbox" checked={habits.completed} onChange={() => onToggleHabit(habits.id)}/>
            <p style={{textDecoration: habits.completed ? 'line-through' : 'none'}}>{habits.habit}</p>
            <button value='Delete' onClick={() => onDeleteHabit(habits.id)}>Delete</button>
        </div>
    )
}

