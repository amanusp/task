import React, { useState } from 'react';
import '../Styles/Step1.css';

function Step4(props) {

    return (
        <div className="form">
            <div className="check-sign">
                <img alt="check-logo" src={require("../Images/check.png")}/>
            </div>
            <h1 className='congrats'><b>Congratulations, {props.name}</b></h1>
            <p className='text-muted'>You have completed onboarding, you can start using the Eden!</p>
            <button className='button'>Launch Eden</button>
        </div>
    )
}

export default Step4;