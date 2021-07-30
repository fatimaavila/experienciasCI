import axios from 'axios';

async function getAxios(url, token) {
  const headers = token ? { Authorization: token } : null;
  const { data } = await axios.get(url, {
    headers,
  });
  return data;
}
async function postAxios(url, body) {
  const { data } = await axios.post(url, body);
  return data;
}
async function putAxios(url, body, formData, token) {
  const headers = token ? { Authorization: token } : null;
  const avatar = formData ? formData : null;

  const { data } = await axios.put(url, body, avatar, {
    headers,
  });
  return data;
}
async function deleteAxios(url) {
  const { data } = await axios.delete(url);
  return data;
}

export { getAxios, putAxios, postAxios, deleteAxios };
