import React, { useState, useRef } from 'react'

import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'

const AddUser = (props) => {

    const [error, setError] = useState()

    const userNameEl = useRef()
    const userAgeEl = useRef()

    const addUserHandler = (e) => {
        e.preventDefault()

        const userInputName = userNameEl.current.value
        const userInputAge = userAgeEl.current.value

        if (userInputName.trim.lengt === 0 || userInputAge.trim() === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name nad age (none-empty values).'
            })
            return
        }

        if (Number(userInputAge) < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return
        }

        props.addUser(userInputName, userInputAge)


        userNameEl.current.value = null
        userAgeEl.current.value = null
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
                    <input id="username" type="text" ref={userNameEl} />
                    <label htmlFor="age" >Age (years)</label>
                    <input id="age" type="number" ref={userAgeEl} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser