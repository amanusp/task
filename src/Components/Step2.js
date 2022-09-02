import React, {useState} from 'react';
import '../Styles/Step1.css';

function Step2(props){

    return(
        <div className="form">
            <h2><b>Let's set up a home for all your work</b></h2>
            <p className='text-muted'>You can always change them later.</p>
            <label className='label'><b>Workspace Name</b></label>
            <input type="text" className='form-control' placeholder='Eden'/>
            <label className='label'><b>Workspace URL<span className='text-muted'>(optional)</span></b></label>
            <input type="url" className='form-control' placeholder='Steve'/>
            <button className='button' onClick={()=>{props.updateStep(s=>s+1)}}>Create Workspace</button>
        </div>
    )
}

export default Step2;