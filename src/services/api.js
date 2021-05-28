import axios from 'axios'

const api = axios.create({
    baseURL:'https://save-city-backend-gabrielbarcelos1.vercel.app/'
})

export default api