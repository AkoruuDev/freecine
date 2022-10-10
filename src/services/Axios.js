import axios from "axios";

const BASE_URL = 'https://mock-api.driven.com.br/api/v8/cineflex';

function getMovies() {
    const promise = axios.get(`${BASE_URL}/movies`);
    return promise;
}

function getSessions(MOVIE_ID) {
    const promise = axios.get(`${BASE_URL}/movies/${MOVIE_ID}/showtimes`);
    return promise;
}

function getSeats(SESSION_ID) {
    const promise = axios.get(`${BASE_URL}/showtimes/${SESSION_ID}/seats`);
    return promise;
}

function postRequest(ORDER) {
    const promise = axios.post(`${BASE_URL}/seats/book-many`, ORDER);
    return promise;
}

export { getMovies, getSeats, getSessions, postRequest };