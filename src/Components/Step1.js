import React, {useState} from 'react';
import '../Styles/Step1.css';

function Step1(props){

    return(
        <div className="form">
            <h2><b>Welcome! First things first...</b></h2>
            <p className='text-muted'>You can always change them later.</p>
            <label className='label'><b>Full Name</b></label>
            <input type="text" onChange={(e)=>{props.changeName(e.target.value)}} className='form-control' placeholder='Steve Jobs'/>
            <label className='label'><b>Display Name</b></label>
            <input type="text" className='form-control' placeholder='Steve'/>
            <button className='button' onClick={()=>{props.updateStep(s=>s+1)}}>Create Workspace</button>
        </div>
    )
}

export default Step1;