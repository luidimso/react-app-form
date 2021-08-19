import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

function AddUser(props) {
    const [enteredUsername, setEnterededUsername] = useState('');
    const [enteredAge, setEnterededAge] = useState('');

    function addUserHandler(event) {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);
    }

    function usernameChangeHandler(event) {
        setEnterededUsername(event.target.value);
    }

    function ageChangeHandler(event) {
        setEnterededAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler} />

                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;