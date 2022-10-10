import axios from 'axios';

const API_URL = 'http://3.39.11.200:8080';

async function login({ code }) {
  const options = {
    method: 'GET',
    url: API_URL + `/api/v0/member/login-kakao`,
    params: {
      code,
    },
  };
  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function setMyName({ token, name }) {
  const options = {
    method: 'PATCH',
    url: API_URL + '/api/v0/member/me/name',

    data: {
      name,
    },
    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

async function getMyInfo({ token }) {
  const options = {
    method: 'GET',
    url: API_URL + `/api/v0/member/me`,

    headers: {
      Authorization: token,
    },
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

const kakaoAPI = { login, setMyName, getMyInfo };

export default kakaoAPI;
