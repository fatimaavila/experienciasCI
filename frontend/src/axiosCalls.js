import axios from 'axios';

async function getAxios(url) {
  try {
    const { data } = await axios.get(url);
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
async function putAxios(url) {
  try {
    const { data } = await axios.put(url);
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
