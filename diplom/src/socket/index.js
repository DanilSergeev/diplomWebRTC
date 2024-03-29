import { io } from 'socket.io-client';

const options = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"]
}

const socket = io(process.env.REACT_APP_URL_SOCET, options);

export default socket;