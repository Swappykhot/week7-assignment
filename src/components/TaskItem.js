import React, { useContext } from 'react';  // Ensure useContext is imported
import TaskContext from '../context/TaskContext';  // Ensure TaskContext is imported
import App from '../App';  // Import custom styles

const TaskItem = ({ task }) => {
    const { dispatch } = useContext(TaskContext);  // Access the dispatch method from TaskContext

    const handleToggle = () => {
        dispatch({ type: 'TOGGLE_TASK', payload: task.id });
    };

    const handleRemove = () => {
        dispatch({ type: 'REMOVE_TASK', payload: task.id });
    };

    return (
        <li className="task-item">
            <span className={`task-name ${task.completed ? "completed" : ""}`}>
                {task.name}
            </span>
            <div className="task-actions">
                <button className={`toggle-btn ${task.completed ? 'undo' : 'complete'}`} onClick={handleToggle}>
                    {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button className="remove-btn" onClick={handleRemove}>Remove</button>
            </div>
        </li>
    );
};

export default TaskItem;