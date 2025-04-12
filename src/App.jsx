import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import CourseExplorer from './components/CourseExplorer';
import QuizInterface from './components/QuizInterface';
import EducatorInsights from './components/EducatorInsights';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/courses" element={<CourseExplorer />} />
        <Route path="/quiz" element={<QuizInterface />} />
        <Route path="/educator" element={<EducatorInsights />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}

export default App;