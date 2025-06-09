import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NeedLogin = ({ children }) => {
  let isAlerted = false;
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  useEffect(() => {
    if (!isLoggedIn && !isAlerted) {
      alert('로그인이 필요한 페이지입니다.');
      navigate('/login', { replace: true });
      isAlerted = true;
      return;
    }
  }, []);

  return isLoggedIn ? children : null;
};

export default NeedLogin;
