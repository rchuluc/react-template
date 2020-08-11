import axios from 'axios'

//Service config example
const ExampleService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 2000,
})

//Interceptors example 

//Request
ExampleService.interceptors.request.use((config) => {
    //This is called before every request
    // config contains all request parameters
    console.log('Hello from request interceptor')
    return config
}, (error) => {
    //Every request error call this function

    return Promise.reject(error);
})

//Request
ExampleService.interceptors.response.use((response) => {
    //Every 2xx status cause this function to trigger
    //You can do something with the response
    console.log('Hello from response interceptor')
    return response
}, (error) => {
    //Every request that falls outside 2xx cause this function to trigger
    return Promise.reject(error);
})

export default ExampleService 