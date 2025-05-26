import io from 'socket.io-client';

const token = localStorage.getItem('token'); // Hoặc nơi bạn đang lưu JWT

const socket = io('https://zaloapp-production.up.railway.app', {
  transports: ['websocket'],
  auth: {
    token: token,
  },
});




export default socket;
