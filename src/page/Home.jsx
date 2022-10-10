import React from 'react';
import { Link, useParams } from 'react-router-dom';
import kakaoAPI from 'api/v1/kakao';

const Home = () => {
  const { token } = useParams();

  if(token) {
    const payload = token.split('.')[1];
    const data = JSON.parse(atob(payload));
    console.log(data);
  }
  const setName = async () => {
    const result = await kakaoAPI.setMyName({token, name:"name"});
    console.log("set name:", result)
  }

  const getInfo = async () => {
    const result = await kakaoAPI.getMyInfo({token, name:"name"});
    console.log("get info:", result);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Home</h1>
      <Link to="/login">Login</Link>
      <div style={{padding: "50px"}}>
        <input />
        <button onClick={setName}>Set Name!</button>
        <button onClick={getInfo}>get info</button>
      </div>
    </div>
  );
};

export default Home;
