import './App.css';
import { NavBar } from './components/nav-bar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from './pages/login/LoginPage'
import { SignupPage } from './pages/signup/SignupPage'
import { NotfoundPage } from './pages/error/NotFound';
import { UnauthorizedPage } from './pages/unauthorized/Unauthorized';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className='container'>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/403" element={<UnauthorizedPage />} />
          <Route path="*" element={< NotfoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
