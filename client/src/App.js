import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import RegisterForm from './components/RegisterForm';
import AdminLoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import AdminsTable from './components/AdminList';


function App() {
  return (
    <Router>
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<AdminLoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/admins" element={<AdminsTable/>} />
      </Routes>
    </Router>
  );
}

export default App;







// import logo from './logo.svg';
// import './App.css';
// import RegisterForm from './components/RegisterForm';
// import LoginForm from './components/LoginForm';
// function App() {
//   return (
//     <div>
//       <RegisterForm/>
//     </div>
//   );
// }

// export default App;
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Routes>
  
//         <Route path="/api/login" element={<LoginForm/>} />
//         <Route path="/" element={<RegisterForm />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
