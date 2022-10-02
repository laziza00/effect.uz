import axios from "axios";

const token = "LAEQ2GUBlv8tmxCdFRvq0NhiQrGgBJlEGifjvBz4e0ZHeJZ6Dg"

const headers = {
  headers: {
     "Content-Type": "application/json; charset=utf-8",
     "Authorization": `Bearer ${token}`
  }
}

const params = {
  username: "api",
  password: "apiapiapi"
}

const LOGIN_URL = "https://simply.uz/api/login"
const NEWS_END = "https://simply.uz/api/news-end?count";
const COME = "https://simply.uz/api/come";
const ADVERT = "https://simply.uz/api/advert";
const RECEPTION = "https://simply.uz/api/reception";
const COMMENT = "https://simply.uz/api/comment";
const STAR = "https://simply.uz/api/star";


const POST = {
  login: () => axios.post(LOGIN_URL, params),
  news_item: (params) => axios.post(NEWS_END, params, headers),
  comment: (params)=> axios.post(COMMENT, params, headers),
  star: (params)=> axios.post(`${STAR}`, params, headers),
}

export default POST;