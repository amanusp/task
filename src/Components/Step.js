import React, {useState} from 'react';
import '../Styles/Step.css';

function Step(props){
    console.log(props);
    return(
        <div className={"stepBlock" + (props.paint ? " selected" : '' )}>
            <div className={"circleWrapper"} onClick={()=>{props.updateStep(props.index+1)}}>
                <div className="circle">
                    {props.label}
                </div>
            </div>
        </div>
    )
}

export default Step;