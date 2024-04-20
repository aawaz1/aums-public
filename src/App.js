import logo from './logo.svg';
import './App.css';
import AdmissionForm from './components/AdmissionForm';
import { Route, Routes } from 'react-router-dom'
import AdmissionForm2 from './components/AdmissionForm2';
import AdmissionForm3 from './components/AdmissionForm3';
import AdmissionForm4 from './components/AdmissionForm4';
import Form from './components/Form';
import Download from './components/Download';
import Document from './components/Document';
import CustomizedTabs from './components/CommonTab';
import { useState } from 'react';
import { Box, Button } from '@mui/material';

function App() {

  const steps = ["PERSONAL", "FAMILY", "HEALTH", "ACADEMIC", "EMERGENCY", "DOCUMENT"];
  const [step, setStep] = useState(0);

  const initFormData = {
    firstName: { value: "", error: "" },
    lastName: { value: "", error: "" },
    middleName: { value: "", error: "" },
    dob: { value: null, error: "" },
    gender: { value: "", option: [{ value: "Male", label: "Male" }, { value: "Female", label: "Female" }, { value: "Other", label: "Other" }], error: "" },
    maritalStatus: { value: "", option: [{ value: "Unmarried", label: "Unmarried" }, { value: "Married", label: "Married" }, { value: "Divorcee", label: "Divorcee" }], error: "" },
    "civilId": { value: "", error: "" },
    "mobileOne": { value: "", error: "", phoneCode: { value: "" } },
    "mobileTwo": { value: "", error: "", phoneCode: { value: "" } },
    "homeTelOne": { value: "", error: "", phoneCode: { value: "" } },
    "homeTelTwo": { value: "", error: "", phoneCode: { value: "" } },
    "faxTel": { value: "", error: "", phoneCode: { value: "" } },
    "workTel": { value: "", error: "", phoneCode: { value: "" } },
    "emailOne": { value: "", error: "" },
    "emailTwo": { value: "", error: "" },
    "nationality": { value: "", error: "" },
    "birthCountry": { value: "", error: "" },
    "passport": { value: null, error: "" },
    "residency": { value: "", error: "" },
    "securityCard": { value: null, error: "" },
    "isHealthRecord": { value: null, error: "" },
    "healthNote": { value: "", error: "" },
    "isSuspended": { value: null, error: "" },
    "suspensionNote": { value: "", error: "" },
    "sponsorship": {
      "parents": { value: false, error: "" },
    },
    isDeclared : { value: false, error: "" },
    document : {
      photograph : {value : null , error : ""},
      transcript : {value : null , error : ""},
      toefl: {value : null , error : ""},
      highschool : {value : null , error : ""},
      civilid : {value : null , error : ""},
      passport : {value : null , error : ""},
      record : {value : null , error : ""},
      goodconduct : {value : null , error : ""}

    },
    "archivements": { value: [{ value: "", error: "" }] },
    "address": {
      "home": { value: "", error: "" },
      "block": { value: null, error: "" },
      "appartment": { value: null, error: "" },
      "street": { value: "", error: "" },
      "area": { value: "", error: "" },
      "jaddah": { value: null, option: [{ value: true, label: "True" }, { value: false, label: "False" }], error: "" },
      "country": { value: "", error: "" },
      "po": { value: null, error: "" },
      "zipCode": { value: null, error: "" },
      "governorate": { value: null, option: [{ value: "A", label: "governateA" }], error: "" },
    },
    "family": {
      "fatherName": { value: "", error: "" },
      "fatherDob": { value: null, error: "" },
      "fatherNationality": { value: "", error: "" },
      "fatherCivilId": { value: null, error: "" },
      "fatherOccup": { value: "", error: "" },
      "fatherEmployer": { value: "", error: "" },
      "fatherMobile": { value: null, error: "", phoneCode: { value: "" } },
      "fatherWorkTel": { value: null, error: "", phoneCode: { value: "" } },
      "fatherEmail": { value: "", error: "" },
      "motherName": { value: "", error: "" },
      "motherDob": { value: null, error: "" },
      "motherNationality": { value: "", error: "" },
      "motherCivilId": { value: null, error: "" },
      "motherOccup": { value: "", error: "" },
      "motherEmployer": { value: "", error: "" },
      "motherMobile": { value: null, error: "", phoneCode: { value: "" } },
      "motherWorkTel": { value: null, error: "", phoneCode: { value: "" } },
      "motherEmail": { value: "", error: "" },
    },
    "emergency": [
      {
        "name": { value: "", error: "" },
        "contact": { value: "", error: "" ,  phoneCode: { value: "" } },
        "relationship": { value: "", error: "" },
        "civilId": { value: "", error: "" },
      },
      {
        "name": { value: "", error: "" },
        "contact":{ value: "", error: "" , phoneCode: { value: "" } },
        "relationship": { value: "", error: "" },
        "civilId": { value: "", error: "" },
      }
    ],
    // "education": [
    //   {
    //     "name": { value: "", error: "" },
    //     "type": { value: "", error: "" },
    //     "gpa": { value: null, error: "" },
    //     "date": { value: null, error: "" },
    //     "degree": { value: "", error: "" },
    //   },
    //   {
    //     "name": { value: "", error: "" },
    //     "type": { value: "", error: "" },
    //     "country": { value: "", error: "" },
    //     "gpa": { value: null, error: "" },
    //     "date": { value: null, error: "" },
    //     "major": { value: "", error: "" },
    //     "degree": { value: "", error: "" },
    //   }
    // ],
    "school": {
      value: [
        {
          "name": { value: "", error: "" },
          "type": { value: "", error: "" },
          "gpa": { value: "", error: "" },
          "date": { value: "", error: "" },
          "degree": { value: "", error: "" },
        },
      ]
    },
    "college": {
      value: [{
        "name": { value: "", error: "" },
        "type": { value: "", error: "" },
        "country": { value: "", error: "" },
        "gpa": { value: null, error: "" },
        "date": { value: null, error: "" },
        "major": { value: "", error: "" },
        "degree": { value: "", error: "" },
      }]
    },
    "languages": [
      {
        "language": { value: "", error: "English" },
        "read": { value: "", error: "" },
        "write": { value: "", error: "" },
        "speak": { value: "", error: "" },
      },
      {
        "language": { value: "", error: "Arabic" },
        "read": { value: "", error: "" },
        "write": { value: "", error: "" },
        "speak": { value: "", error: "" },
      },
      {
        "language": { value: "", error: "" },
        "read": { value: "", error: "" },
        "write": { value: "", error: "" },
        "speak": { value: "", error: "" },
      }
    ]
  }
  const [formData, setFormData] = useState(initFormData);
  const handleChange = (e, firstKey, secondKey, thirdKey , forthKey) => {
    if (e.persist)
      e.persist();

    setFormData(currentData => {
      const value = e.target.value;
      const data = { ...currentData };
      let updateData = data;
      if (firstKey) {
        updateData = updateData[firstKey]
      }

      if (secondKey) {
        updateData = updateData[secondKey]
      }

      if (thirdKey) {
        updateData = updateData[thirdKey]
      }
      if (forthKey) {
        updateData = updateData[forthKey]
      }
      console.log(updateData)
      updateData.value = value;
      return data;
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step !== 5) {
      setStep(step + 1)
    } else {
      // Submit
    }
  }

  const handleCancel = () => {
    setStep(0);
    setFormData(initFormData)
  }
  return (
    <div className="">
      <CustomizedTabs steps={steps} value={step} />
      <form onSubmit={handleSubmit}>
        {
          step == 0 ?
            <AdmissionForm formData={formData} handleChange={handleChange} />
            : step == 1 ?
              <AdmissionForm2 formData={formData} handleChange={handleChange} />
              : step == 2 ?
                <AdmissionForm3 formData={formData} handleChange={handleChange} />
                : step == 3 ?
                  <AdmissionForm4 formData={formData} handleChange={handleChange} />
                  : step == 4 ?
                    <Form formData={formData} handleChange={handleChange} />
                    : step == 5 ? <Document formData={formData} handleChange={handleChange} /> : null
        }
        <Box style={{ height: "4rem" }}></Box>
        <Box className="submitContainer">
          <Button className={"cancelButton"} onClick={handleCancel}>Cancel</Button>
          <Button className={"submitButton"} type="submit">Next</Button>
        </Box>

      </form>
    </div >
  );
}

export default App;
