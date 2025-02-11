import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Components/Signin/Signin';
import Dashboard from './Components/Dashboard/Dashboard';
import Employee from './Components/Employee/Employee';
import Attendance from './Components/Attendance/Attendance';
import EmployeeTable from './Components/Employee/EmployeeTable';
import EmployeeForm from './Components/Employee/Employeeform';
import AttendancePage from './Components/Attendance/AttendancePage';
import Leaverequest from './Components/Attendance/Leaverequest';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/employeetable" element={<EmployeeTable />} />
          <Route path="/employeeform" element={<EmployeeForm />} />

          <Route path="/attendance" element={<Attendance />} />
          <Route path="/" element={<AttendancePage />} />
          <Route path="/leave" element={<Leaverequest />} />
   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
