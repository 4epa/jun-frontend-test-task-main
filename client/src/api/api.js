import io from 'socket.io-client';

const socket = io('http://localhost:3002');

export const connectToServer = () => socket.emit('connection');
export const startTrackTickers = (setStart) => socket.emit('start', setStart(true));
export const getTrackTickersStatus = (setData) => socket.on('ticker', (round) => setData(round));
export const disconnecToServer =() => socket.disconnect();



