import io from 'socket.io-client';

const token = localStorage.getItem('token');

const socket = io('https://zaloapp-production.up.railway.app', {
  transports: ['websocket'],
  auth: {
    token: token,
  },
});

export default socket;
