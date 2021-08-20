import React, { Fragment } from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import ReactDom from 'react-dom';

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

function ModalOverlay(props) {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onClose}>OK</Button>
            </footer>
        </Card>
    );
}

function ErrorModal(props) {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose}></Backdrop>, document.getElementById("backdrop-root"))}
            {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onClose={props.onClose}></ModalOverlay>, document.getElementById("overlay-root"))}
        </Fragment>
    );
}

export default ErrorModal;