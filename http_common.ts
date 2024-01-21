import axios from "axios";
import Config from 'react-native-config'


// const SERVER_LINK = '89.116.27.101'
const SERVER_LINK = '192.168.1.39'

const server_centri = `${SERVER_LINK}:8001`
export const terms = `http://${SERVER_LINK}/terms.html`
export const data = `http://${SERVER_LINK}/data.html`
export const centrifugo = `ws://${server_centri}/connection/websocket`
export const channel = [`transactions`, `report`, `spend`, `login`, `com`, `product`, `customer`]
export const SERVER = `http://${SERVER_LINK}:3005/api/`
export default axios.create({
  baseURL: `${SERVER}`,
  headers: {
    "Content-type": "application/json"
  }
});