import axios from 'axios';

export default class API {
  static url = process.env.API_URL ?? 'https://api.dev.fundl.io';

  static getToken() {
    return localStorage.getItem('token');
  }

  static setToken(token: string) {
    localStorage.setItem('token', token);
  }

  static removeToken() {
    localStorage.removeItem('token');
  }

  static async get(endpoint: string) {
    const token = API.getToken();

    const response = await axios
      .get(`${API.url}/${endpoint}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .catch((error) => {
        throw error;
      });

    if (response) {
      return response.data;
    }
  }

  static async post(endpoint: string, data: Object) {
    const token = API.getToken();

    const response = await axios
      .post(`${API.url}/${endpoint}`, data, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .catch((error) => {
        return error;
      });

    return response;
  }

  static async put(endpoint: string, data: Object) {
    const token = API.getToken();

    const response = await axios
      .put(`${API.url}/${endpoint}`, data, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .catch((error) => {
        console.log(error);
      });

    if (response) {
      return response.data;
    }
  }

  static async delete(endpoint: string) {
    const token = API.getToken();

    const response = await axios
      .delete(`${API.url}/${endpoint}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      .catch((error) => {
        console.log(error);
      });

    if (response) {
      return response.data;
    }
  }
}
