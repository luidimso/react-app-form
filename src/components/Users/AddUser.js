import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function AddUser(props) {
    const [enteredUsername, setEnterededUsername] = useState('');
    const [enteredAge, setEnterededAge] = useState('');

    function addUserHandler(event) {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if(+enteredAge < 1) {
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnterededUsername("");
        setEnterededAge("");
    }

    function usernameChangeHandler(event) {
        setEnterededUsername(event.target.value);
    }

    function ageChangeHandler(event) {
        setEnterededAge(event.target.value);
    }

    return (
        <div>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>

            <ErrorModal title="An error ocurred!" message="Something went wrong!"></ErrorModal>
        </div>
    );
}

export default AddUser;