import React, {useState, useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

function AddUser(props) {
    const [error, setError] = useState();
    const usernameInputRef = useRef();
    const ageInputRef = useRef();

    function addUserHandler(event) {
        event.preventDefault();

        const username = usernameInputRef.current.value;
        const age = ageInputRef.current.value;

        if(username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }

        if(+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (greater then 0).'
            });
            return;
        }

        props.onAddUser(username, age);
        usernameInputRef.current.value = "";
        ageInputRef.current.value = "";
    }

    function clearError() {
        setError(null);
    }

    return (
        <Wrapper>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={usernameInputRef} />

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>

            {error && <ErrorModal title={error.title} message={error.message} onClose={clearError}></ErrorModal>}
        </Wrapper>
    );
}

export default AddUser;