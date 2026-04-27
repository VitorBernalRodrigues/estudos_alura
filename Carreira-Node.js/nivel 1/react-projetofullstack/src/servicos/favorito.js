import axios from "axios";

const favoritosAPI = axios.create({
    baseURL: "http://localhost:3000/favoritos"
});

async function getFavoritos() {
    const response = await favoritosAPI.get('/');
    return response.data
}

async function postFavorito(favorito) {
    await favoritosAPI.post(`/{id}`);
}

async function deletaFavorito(params) {
    await favoritosAPI.delete(`/{id}`);
}

export { getFavoritos, postFavorito, deletaFavorito }