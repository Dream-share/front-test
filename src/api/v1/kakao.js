import axios from 'axios';

const API_URL = 'http://localhost:8080';

async function login({ code }) {
  const options = {
    method: 'GET',
    url: API_URL + `/login-api`,

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

// NOTE : POST 방식 예시
async function postWay({ code, token }) {
  const options = {
    method: 'POST',
    url: API_URL + '/test/post',

    data: {
      code,
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

const kakaoAPI = { login, postWay };

export default kakaoAPI;
