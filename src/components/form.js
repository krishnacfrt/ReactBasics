import React, { useState } from "react";
import FormData from "./FormData";
import "./Form.css";

export default function Form(props) {
  console.log(FormData);
  const [FormValues, SetFormValues] = useState({});
  const [CurrentSection, SetCurrentSection] = useState(1);
  const [SubmittedData, SetSubmittedData]=useState(null)
  const TotalSection = Object.keys(FormData).length;
  let Progress =((CurrentSection) / TotalSection) * 100;
  const HandleInput = (Field, value) => {
    SetFormValues({ ...FormValues, [Field]: value });
  };
  const HandlePrevious = () => {if(CurrentSection>1){SetCurrentSection(CurrentSection - 1)}};
  const HandleNext = () => {
    const CurrentSectionFields = FormData[`section${CurrentSection}`].fields;
    const isCurrentSectionValid = CurrentSectionFields.every(
      (field) => FormValues[field.label]
    );
    if ((isCurrentSectionValid)) {
      
      SetCurrentSection(CurrentSection + 1)
      
    } else {
      alert("please fill in required fields");
    }
  };
  const HandleSubmit = () => {

    console.log("Form values :", FormValues);
    const CurrentSectionFields = FormData[`section${CurrentSection}`].fields;
    const isCurrentSectionValid = CurrentSectionFields.every(
      (field) => FormValues[field.label]
    );
    if ((isCurrentSectionValid)){
      alert('Form submitted successfully');
      SetSubmittedData(FormValues);
      
    }
    else{
      alert('please fill required segment')
    }
     
  };

  return (
    <div className="form-container">
      <div className="progress">
        <div
          style={{
            width: `${Progress}%`,
            height: "100%",
            borderRadius:'10px',
            background: "#4caf50",
          }}>            
        </div>
      </div>
      

        {Object.keys(FormData).map(({title, fields, component: Component }, index) => (
          <div key={title} className={`form-section ${CurrentSection===index+1?'active':''}`}>
            {CurrentSection===index+1 && Component && <Component />
              }
            <h2 className="header">{title}</h2>
            {/* {fields.map((field) => (
              <div key={field.label}>
                <label className="label2">{field.label}</label>
                <input className="form-input"
                  type={field.type} placeholder={field.placeholder}
                  value={FormValues[field.label] || ""}
                  onChange={(e) => HandleInput(field.label, e.target.value)}
                ></input>
              </div>
            ))} */}
          </div>
        ))}
        {CurrentSection > 1? (
          <button className="prev-button" onClick={HandlePrevious}>Previous</button>
        ):''}
        {CurrentSection < TotalSection ? (
          <button className="next-button" onClick={HandleNext}>Next</button>
        ) : (
          <button className="submit-button" onClick={HandleSubmit}>Submit</button>
        )}

    {SubmittedData && (<div>
      <h2>Submitted Data:</h2>
      <pre>{JSON.stringify(SubmittedData)}</pre>
      </div>
      )}
      
      
    </div>
  );
}
