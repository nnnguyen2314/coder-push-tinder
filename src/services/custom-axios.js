import axios from 'axios';

export default axios.create({
    baseURL: "https://dummyapi.io/data/api/",
    headers: {
        "Content-type": "application/json",
        "app-id": "60349db146ff8b0837d18351"
    }
});