import React, {useState} from 'react';
import './App.css';
import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Step3 from './Components/Step3';
import Step4 from './Components/Step4';
import StepNavigation from './Components/StepNaviagtion';

function App() {
  const labelArray = ["1","2","3","4"];
  const [currentStep, updateCurrentStep] = useState(1);
  const [name, setName] = useState("");

  function changeName(name){
    setName(name);
  }
  function updateStep(step){
    updateCurrentStep(step)
  }
  let card = null;
  if(currentStep === 1){
    card = <Step1 updateStep={updateStep} changeName={changeName} />
  }
  else if(currentStep === 2){
    card = <Step2 updateStep={updateStep}/>
  }
  else if(currentStep === 3){
    card = <Step3 updateStep={updateStep}/>
  }
  else{
    card = <Step4 updateStep={updateStep} name={name}/>
  }
  return (
    <div className='App'>
      <img alt="eden-logo" src={require("./Images/Eden.png")} className="logo"/>
      <StepNavigation labelArray={labelArray} currentStep={currentStep}  updateStep={updateStep}/>
      {card}
    </div>
  );
}

export default App;
