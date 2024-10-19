import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import TaskItem from './TaskItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import App from '../App';
const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <TransitionGroup component="ul" className="task-list">
            {tasks.map(task => (
                <CSSTransition key={task.id} timeout={500} classNames="task">
                    <TaskItem task={task} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

export default TaskList;