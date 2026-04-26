import axios from "axios";

const livrosAPI = axios.create({
    baseURL: "http://localhost:3000/livros"
});

function getLivros() {
    const response = livrosAPI.get('/');
    return response.data
}

export { getLivros }