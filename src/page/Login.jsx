import React from 'react';

// local
import KakaoLoginImage from 'static/img/kakao_login_medium_narrow.png';

const Login = () => {
  return (
    <div>
      {' '}
      <div style={{ textAlign: 'center' }}>
        <a href="https://kauth.kakao.com/oauth/authorize?client_id=481922eb7af3c126aa6081ba3b96d873&redirect_uri=http://localhost:3000/loginpass&response_type=code">
          <img src={KakaoLoginImage} />
        </a>
      </div>
    </div>
  );
};

export default Login;
