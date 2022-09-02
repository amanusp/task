import React, { useState } from 'react';
import '../Styles/Step1.css';

function Step3(props) {


    function changeleft(){
        document.getElementById('leftcard').style.cssText = 'border: #8000e3 solid 0.0001px;color: #8000e3;';
        document.getElementById('rightcard').style.cssText = 'border: gainsboro solid 0.0001px;color: black;';
    }
    function changeright(){
        document.getElementById('rightcard').style.cssText = 'border: #8000e3 solid 0.0001px;color: #8000e3;';
        document.getElementById('leftcard').style.cssText = 'border: gainsboro solid 0.0001px;color: black;';
    }

    return (
        <div className="form">
            <h2><b>How are you planning to use Eden?</b></h2>
            <p className='text-muted'>We'll stream your setup experience accordingly.</p>
            <div className="left" id="leftcard" onClick={()=>{changeleft()}}>
                <span><h4 className='person'><i className="bi bi-person-fill"></i></h4></span>
                <p><b>For myself</b></p>
                <p className='text-muted'>Write better. Think more clearly. Stay organised</p>
            </div>
            <div className='gap'></div>
            <div className="right" id="rightcard" onClick={()=>{changeright()}}>
                <span><h4 className='person'><i className="bi bi-people-fill"></i></h4></span>
                <p><b>With my team</b></p>
                <p className='text-muted'>Wikis, docs, tasks & projects, all in one place</p>
            </div>
            <button className='button' onClick={() => { props.updateStep(s => s + 1) }}>Create Workspace</button>
        </div>
    )
}

export default Step3;