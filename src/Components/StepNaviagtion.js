import React, { useState } from 'react';
import Step from './Step';
import '../Styles/StepNavigation.css';

function StepNavigation(props) {
    return (
        <div className='stepWrapper'>
            {props.labelArray.map((item,index)=>  
            <Step 
            key={index} 
            index={index}  
            paint = {props.currentStep >= index+1}
            label={item}
            updateStep={props.updateStep}
            />)}
        </div>)
}

export default StepNavigation;