import axios from 'axios'

const API = axios.create({ 
    baseURL: 'http://localhost:4000/',
    headers: {"Content-Type": "application/json"}
})

// way to send session token to backend. interceptors and backend will know we are logged in
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchWarehouse= () => API.get('./warehouses')
export const createWarehouse= (newForm) => API.post('./warehouses', newForm)
export const updateWarehouse= (id, updatedForm) => API.put(`./warehouses/${id}`, updatedForm)
export const deleteWarehouse = (id) => API.delete(`./warehouses/${id}`)
export const login = (FormData) => API.post('./users/login',FormData)
export const signup = (FormData) => API.post('./users/signup',FormData)