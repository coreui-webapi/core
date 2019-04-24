import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 1000,
    headers: {'Access-Control-Allow-Origin': '*'}
  });

const document = {
    get: () => api.get('/document'),
<<<<<<< HEAD
    post: body => api.post('/document', body)
=======
    post: body => api.post('/document',body)
>>>>>>> a4e691c9b032efd5e6864afc3d47e9a789712d58
}

export default {
    document,
}