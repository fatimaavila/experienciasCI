import axios from 'axios';

async function getAxios(url, token) {
  const headers = token ? { Authorization: token } : null;
  const { data } = await axios.get(url, {
    headers,
  });
  return data;
}
async function postAxios(url, body, token) {
  const headers = token ? { Authorization: token } : null;

  const { data } = await axios.post(url, body, {
    headers,
  });
  return data;
}
async function putAxios(url, body, token) {
  const headers = token ? { Authorization: token } : null;

  const { data } = await axios.put(url, body, {
    headers,
  });
  return data;
}
async function deleteAxios(url, token) {
  const headers = token ? { Authorization: token } : null;

  const { data } = await axios.delete(url, {
    headers,
  });
  return data;
}

export { getAxios, putAxios, postAxios, deleteAxios };
