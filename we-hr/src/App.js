import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Components/Signin/Signin';
import Dashboard from './Components/Dashboard/Dashboard';
import Employee from './Components/Employee/Employee';
import Attendance from './Attendance/Attendance';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/attendance" element={<Attendance />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
