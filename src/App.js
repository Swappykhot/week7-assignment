import React from 'react';
import { TaskProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskStats from './components/TaskStats';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
    return (
        <TaskProvider>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">🚀 Task Manager Pro</h1>
                </header>
                <main className="App-main">
                    <section className="App-add-task">
                        <AddTask />
                    </section>
                    <section className="App-task-list">
                        <TaskList />
                    </section>
                    <section className="App-task-stats">
                        <TaskStats />
                    </section>
                </main>
                <footer className="App-footer">
                    <p>© 2023 Task Manager Pro. All rights reserved.</p>
                </footer>
            </div>
        </TaskProvider>
    );
}

export default App;