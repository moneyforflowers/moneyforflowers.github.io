import axios from "axios";

let API_TWITCH_KEY = "magcfm9155x67mc5tcfud1larpcmnd";
let API_SECRET = "Bearer nma6fmoz874zt7dwd671fdzdybnvq0";

let api_twitch = axios.create({
  headers: {
    "Client-ID": API_TWITCH_KEY,
    "Authorization": API_SECRET
  }
});

export default api_twitch;
