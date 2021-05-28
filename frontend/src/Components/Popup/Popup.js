import React, { useState, useEffect } from 'react';
import './Popup.scss';

function Popup({type, success, error}) {
    const [show, setShow] = useState(true);
    useEffect(() => {
        return () => {
            setTimeout(()=>{
                setShow(false);
            }, 3000);
        }
    });
    return (
        <h1 className={"popup " + (error?"popup--error":"popup--success") + (show?" popup--show":"")}>
        {
            success?
            type+" SUCCESFULL":
            error
        }
        </h1>
    )
}

export default Popup
