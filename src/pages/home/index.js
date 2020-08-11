import React, { useState } from 'react';
import './styles.scss'
import Button from '@components/button'
import UserService from '@services/userService'

const Home = () => {
    //React useState hook example
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const _users = (await UserService.getUsers()).data
        //or const {data : _users} = await UserServices.getUsers()

        //set users to react state
        setUsers(_users)
    }

    return (
        <div className="container">
            <h1>React template repository</h1>
            <Button label="Fetch users" onClick={fetchUsers} />
            <p>Users</p>
            {!!users.length ? users.map((user, index) => <span className="user-row" key={index}>{user.name}</span>) : <p>0 users found</p>}
        </div>
    )
}

export default Home