import axios from "axios";

const instance= axios.create({
    baseURL: 'https://api-hondumarket-production.up.railway.app',
    withCredentials: true
})

export default instance