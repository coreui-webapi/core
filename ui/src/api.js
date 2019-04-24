import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 1000,
    headers: {'Access-Control-Allow-Origin': '*'}
  });

const document = {
    get: () => api.get('/document'),
    post: body => api.post('/document', body)
}

export default {
    document,
}