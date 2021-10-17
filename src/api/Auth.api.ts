import { store } from 'react-notifications-component';

import API from './api';

export default class Auth {
  static async login(username: string, password: string) {
    const response: any = await API.post('/auth', {
      username,
      password,
    });

    if (response.status === 201) {
      store.addNotification({
        title: 'Success',
        message: 'Login successful',
        type: 'success',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      API.setToken(response.data.accessToken);
      window.location.replace('/dashboard');
      return response;
    } else if (
      response.response.data.statusCode >= 400 &&
      response.response.data.statusCode < 500
    ) {
      store.addNotification({
        title: 'Login failed',
        message: 'Invalid credentails',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      return response.response.data;
    } else {
      const error = {
        status: 0,
        message: 'Error',
      };

      return error;
    }
  }
}
