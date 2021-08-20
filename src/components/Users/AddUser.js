import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

function AddUser(props) {
    const [enteredUsername, setEnterededUsername] = useState('');
    const [enteredAge, setEnterededAge] = useState('');
    const [error, setError] = useState();

    function addUserHandler(event) {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        if(+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (greater then 0).'
            });
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

    function clearError() {
        setError(null);
    }

    return (
        <Wrapper>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>

            {error && <ErrorModal title={error.title} message={error.message} onClose={clearError}></ErrorModal>}
        </Wrapper>
    );
}

export default AddUser;