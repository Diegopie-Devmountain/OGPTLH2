import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/LoginForm.jsx';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post('/api/auth', formData);

    if (res.data.success) {
      navigate('/me');
    }
  };

  return (
    <>
      <h1>Log In</h1>
      <LoginForm onLogin={handleLogin} />
    </>
  );
}
