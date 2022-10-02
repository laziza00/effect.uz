import axios from "axios"

const api_url="https://cbu.uz/uz/arkhiv-kursov-valyut/json/"

const  currency_api={
  all:()=>axios.get(api_url)
}



export default currency_api;