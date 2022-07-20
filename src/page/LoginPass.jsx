import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

// local
import kakaoAPI from 'api/v1/kakao';

const Login = () => {
  const { code } = queryString.parse(window.location.search);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (code) {
      const result = await kakaoAPI.login({ code });

      if (result?.id) {
        navigate('/');
      } else {
        alert('로그인 실패');
        navigate('/login');
      }
    } else {
      console.log('no');
    }
  };

  useEffect(() => {
    handleLogin();
  }, []);

  return <div></div>;
};

export default Login;
