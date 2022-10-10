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
      console.log(result)
      if (result.success) {
        const jwt = result?.data?.jwt;
        navigate('/home/' + jwt);
      } else {
        alert('로그인 실패', result);
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
