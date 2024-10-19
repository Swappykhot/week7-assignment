import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const TaskStats = () => {
    const { tasks } = useContext(TaskContext);
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <div>
            <p>Total Tasks: {totalTasks}</p>
            <p>Completed Tasks: {completedTasks}</p>
        </div>
    );
};

export default TaskStats;
