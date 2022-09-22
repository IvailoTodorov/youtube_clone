import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'a83094fd1cmsh4a6974db6f3da54p1ef94fjsnc12fc820464d',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}