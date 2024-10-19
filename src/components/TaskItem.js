import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskItem = ({ task }) => {
    const { dispatch } = useContext(TaskContext);

    const handleToggle = () => {
        dispatch({ type: 'TOGGLE_TASK', payload: task.id });
    };

    const handleRemove = () => {
        dispatch({ type: 'REMOVE_TASK', payload: task.id });
    };

    return (
        <li>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.name}
            </span>
            <button onClick={handleToggle}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={handleRemove}>Remove</button>
        </li>
    );
};

export default TaskItem;
