import axios from 'axios';

async function getAxios(url, token) {
  try {
    const headers = token ? { Authorization: token } : null;
    const { data } = await axios.get(url, {
      headers,
    });
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
async function postAxios(url, body) {
  try {
    const { data } = await axios.post(url, body);
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
async function putAxios(url, body, files, token) {
  try {
    const headers = token ? { Authorization: token } : null;
    const avatar = files ? files : null;

    const { data } = await axios.put(url, body, avatar, {
      headers,
    });
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
async function deleteAxios(url) {
  try {
    const { data } = await axios.delete(url);
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export { getAxios, putAxios, postAxios, deleteAxios };
