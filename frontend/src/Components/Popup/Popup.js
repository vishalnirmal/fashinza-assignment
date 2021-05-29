import React from 'react';
import {useSelector} from 'react-redux';
import './Popup.scss';

function Popup() {
    const {type, success, error} = useSelector(state => state.product);
    return (
        <h1 className={"popup " + (error?"popup--error":"popup--success") + ((success || error)?" popup--show":"")}>
        {
            success?
            type+" SUCCESFULL":
            error
        }
        </h1>
    )
}

export default Popup
