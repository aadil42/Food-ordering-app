import React from 'react';
import ReactDom from 'react-dom';

import classes from './Model.module.css';

const Backdrop = (props) => {

    return <div onClick={props.onClick} className={classes.backdrop} />;
}

const ModelOverlay = (props) => {
    return(
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
    )
}

// getting the id of overlay
const portalElement = document.querySelector('#overlays');

const Model = (props) => {
    return (
        <React.Fragment>
           {ReactDom.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
           {ReactDom.createPortal(
           <ModelOverlay>{props.children} </ModelOverlay>, portalElement)}
        </React.Fragment>
    );
}

export default Model;