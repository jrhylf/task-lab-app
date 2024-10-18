import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Packages / Libraries
import 'boxicons';

// Pages
// import { Dashboard } from "./pages/dashboardPage";
// import { TasksPage } from "./pages/tasksPage";
// import { GoalsPage } from "./pages/goalsPage";
// import { CalendarPage } from "./pages/calendarPage";

// CSS
import '../css/Dashboard.css';
import '../css/custom_bx_icon.css';

function Dashboard() {
    // TODO: Get the username from Login Session.
    const [username, setUsername] = useState("John");

    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate("/dashboard");
    };

    // const [currentPage, setCurrentPage] = useState('dashboardPage');

    // const renderPage = () => {
    //     switch (currentPage) {
    //     case 'dashboardPage':
    //         return <DashboardPage />
    //     case 'tasksPage':
    //         return <TasksPage />;
    //     case 'goalsPage':
    //         return <GoalsPage />;
    //     case 'calendarPage':
    //         return <CalendarPage />;
    //     default:
    //         return <DashboardPage />;
    //     }
    // };

    return(
        <div className="dashboard">
            <header className="user-header">
                <span className="greeting">Hi {username}!</span>
                <lord-icon
                    src="https://cdn.lordicon.com/hkbcsvln.json"
                    trigger="loop"
                    delay="3000"
                    style={{ width: '40px', height: '40px' }}>
                </lord-icon>
            </header>

            <main className="user-main">
                <nav className="nav">
                    <box-icon name='menu' size='md' border='square'></box-icon>
                    <ul className="contents">
                        <li className="navItem" onClick={goToDashboard}><box-icon name='bar-chart-square' size='sm' ></box-icon>Dashboard</li>
                        <li className="navItem"><box-icon name='task' size='sm' ></box-icon>Tasks</li>
                        <li className="navItem"><box-icon name='target-lock' size='sm' ></box-icon>Goals</li>
                        <li className="navItem"><box-icon name='calendar' size='sm' ></box-icon>Calendar</li>
                    </ul>
                </nav>

                <article className="user-article">
                    {/* // TODO: This will contain Router Pages. */}
                </article>
            </main>

            <footer className="user-footer">
                <span className="footer-content">&copy; 2024 ProgressMate</span>
            </footer>
        </div>
    );
}

export default Dashboard;