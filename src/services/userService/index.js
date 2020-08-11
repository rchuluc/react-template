import ExampleService from './config'

export default class UserServices {
    static async getUsers() {
        return await ExampleService.get('/users')
    }
}


