import UserServices from './index'

describe('User Services test suite', () => {
    test('[GET] /users - Must return an user list', async () => {
        const { data: users } = await UserServices.getUsers()
        expect(users).toHaveLength(10)
    })
})