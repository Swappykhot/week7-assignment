import React, { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';

const AddTask = () => {
    const [taskName, setTaskName] = useState('');
    const { dispatch } = useContext(TaskContext);

    const handleAddTask = () => {
        dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), name: taskName, completed: false } });
        setTaskName('');
    };

    return (
        <div>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;
