// import axios from 'axios'

// export const axiosInstance = axios.create({
//   baseURL: '/'
// })

// export function authenticate({ email, password }) {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }
//   const credentials = { email, password }
//   return axiosInstance.post('/users/login', credentials, config)
// }

// export function setTokenInterceptor(token) {
//   saveToLocalStorage('token', token)
//   axiosInstance.interceptors.request.use((config) => {
//     config.headers.token = token
//     return config
//   })
// }

// function saveToLocalStorage(fileName, data) {
//   if (localStorage) localStorage[fileName] = data
// }

export default {
  baseUrl: "https://app-garage-manager.herokuapp.com"
};
