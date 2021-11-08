import React, { useState } from 'react'

import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {

    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (e) => {
        e.preventDefault()

        if (userName.trim.lengt === 0 || userAge.trim() === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name nad age (none-empty values).'
            })
            return
        }

        if (Number(userAge) < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return
        }

        props.addUser(userName, userAge)

        console.log(userName, userAge)
        setUserName("")
        setUserAge("")
    }

    const userNameChangeHandler = (e) => {
        setUserName(e.target.value)
    }

    const userAgeChangeHandler = (e) => {
        setUserAge(e.target.value)
    }


    const closeErrorModal = () => {
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal onClick={closeErrorModal} title={error.title} message={error.message} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input value={userName} id="username" type="text" onChange={userNameChangeHandler} />
                    <label htmlFor="age" >Age (years)</label>
                    <input value={userAge} id="age" type="number" onChange={userAgeChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser