import logo from './logo.svg';
import './App.css';
import AdmissionForm from './components/AdmissionForm';
import {Route , Routes} from 'react-router-dom'
import AdmissionForm2 from './components/AdmissionForm2';
import AdmissionForm3 from './components/AdmissionForm3';
import AdmissionForm4 from './components/AdmissionForm4';
import Form from './components/Form';
import Download from './components/Download';
import Document from './components/Document';
import { useState } from 'react';

function App() {
  const initFormData = {
    firstName: { value: "", error: "" },
    lastName: { value: "", error: "" },
    middleName: { value: "", error: "" },
    dob: { value: null, error: "" },
    gender: { value: "",option : [{value :"Male" , label :"Male"},{value :"Female" , label :"Female"},{value :"Other" , label :"Other"}], error: "" },
    maritalStatus: { value: "",option : [{value :"Unmarried" , label :"Unmarried"},{value :"Married" , label :"Married"},{value :"Divorcee" , label :"Divorcee"}], error: "" },
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
    "isHealthRecord": { value: false, error: "" },
    "healthNote": { value: "", error: "" },
    "isSuspended": { value: false, error: "" },
    "suspensionNote": { value: "", error: "" },
    "sponsorship": {
        "parents": { value: false, error: "" },
    },
    "archivements": [{ value: "", error: "" }],
    "address": {
        "home": { value: "", error: "" },
        "block": { value: null, error: "" },
        "appartment": { value: null, error: "" },
        "street": { value: "", error: "" },
        "area": { value: "", error: "" },
        "jaddah": { value: false, option: [{ value: true, label: true }, { value: false, label: false }], error: "" },
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
        "fatherMobile": { value: null, error: "" },
        "fatherWorkTel": { value: null, error: "" },
        "fatherEmail": { value: "", error: "" },
        "motherName": { value: "", error: "" },
        "motherDob": { value: null, error: "" },
        "motherNationality": { value: "", error: "" },
        "motherCivilId": { value: null, error: "" },
        "motherOccup": { value: "", error: "" },
        "motherEmployer": { value: "", error: "" },
        "motherMobile": { value: null, error: "" },
        "motherWorkTel": { value: null, error: "" },
        "motherEmail": { value: "", error: "" },
    },
    "emergency": [
        {
            "name": { value: "", error: "" },
            "contact": "87654234567",
            "relationship": { value: "", error: "" },
            "civilId": "123456788765"
        },
        {
            "name": { value: "", error: "" },
            "contact": "775544245",
            "relationship": { value: "", error: "" },
            "civilId": "876542345672"
        }
    ],
    "education": [
        {
            "name": { value: "", error: "" },
            "type": { value: "", error: "" },
            "gpa": { value: null, error: "" },
            "date": { value: null, error: "" },
            "degree": { value: "", error: "" },
        },
        {
            "name": { value: "", error: "" },
            "type": { value: "", error: "" },
            "country": { value: "", error: "" },
            "gpa": { value: null, error: "" },
            "date": { value: null, error: "" },
            "major": { value: "", error: "" },
            "degree": { value: "", error: "" },
        }
    ],
    "languages": [
        {
            "language": { value: "", error: "" },
            "read": { value: "", error: "" },
            "write": { value: "", error: "" },
            "speak": { value: "", error: "" },
        },
        {
            "language": { value: "", error: "" },
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
const handleChange = (e, firstKey, secondKey, thirdKey) => {
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
        console.log(updateData)
        updateData.value = value;
        return data;
    })

}
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<AdmissionForm formData={formData} handleChange={handleChange}/>}/>
        <Route path='/form' element={<AdmissionForm2 formData={formData} handleChange={handleChange}/>}/>
        <Route path='/from' element={<AdmissionForm3 formData={formData} handleChange={handleChange}/>}/>
        <Route path='/from1' element={<AdmissionForm4 formData={formData} handleChange={handleChange}/>}/>
        <Route path='/details' element={<Form formData={formData} handleChange={handleChange}/>}/>
        <Route path='/download' element={<Download formData={formData} handleChange={handleChange}/>}/>
        <Route path='/document' element={<Document formData={formData} handleChange={handleChange}/>}/>
      </Routes>
     
     

    </div>
  );
}

export default App;
