import { Box } from '@mui/material'
import React, { useState } from 'react'
import './AdmissionForm.css';

import { Grid } from '@mui/material';
import { Data } from './data';
import MenuItem from '@mui/material/MenuItem';


import CommonAccordion from './CommonAccordion';
import Input from './Input';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { FormData } from './Form2data';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import './phoneInput.css'

const AdmissionForm2 = ({ formData, handleChange }) => {
    const [phone, setPhone] = useState("")

    return (
        <Box sx={{ gap: "10rem" }}>
            <Box sx={{ display: 'flex', justifyContent: "flex-start", backgroundColor: '#B70042', padding: "0.2rem" }}>
                <h4 className='form'>Family Information</h4>
            </Box>
            <Box>
                <CommonAccordion defaultExpanded={true} title={"Fathers Details"}>

                    <Grid container spacing={1}>
                        <Grid item container spacing={1}>


                            <Grid xs={12} md={4} item>

                                <Input isRequired={true} value={formData.family.fatherName.value} handleChange={(e) => handleChange(e, "family", "fatherName")} label={"Fathers Name"} />


                            </Grid>
                            <Grid xs={12} md={4} item>

                                <Input isRequired={true} type={"date"} value={formData.family.fatherDob.value} handleChange={(e) => handleChange(e, "family", "fatherDob")} label={"DOB"} />
                            </Grid>
                            <Grid xs={12} md={4} item>

                                <Input isRequired={true} value={formData.family.fatherNationality.value} handleChange={(e) => handleChange(e, "family", "fatherNationality")} label={"Nationality"} />


                            </Grid>

                            <Grid xs={12} md={4} item>

                                <Input isRequired={true} value={formData.family.fatherCivilId.value} handleChange={(e) => handleChange(e, "family", "fatherCivilId")} label={"Civil Id Number"} />


                            </Grid>
                            <Grid xs={12} md={4} item>

                                <Input isRequired={true} value={formData.family.fatherOccup.value} handleChange={(e) => handleChange(e, "family", "fatherOccup")} label={"Occupation"} />


                            </Grid>
                            <Grid xs={12} md={4} item>

                                <Input isRequired={true} value={formData.family.fatherEmployer.value} handleChange={(e) => handleChange(e, "family", "fatherEmployer")} label={"Employer"} />


                            </Grid>





                            <Grid xs={12} md={4} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <label className='label'>Phone Number</label>

                                    <PhoneInput
                                    inputStyle={{ width: "100%" ,background :"#F6F2F8",   height: '2.6rem', }}

                                        country={'kw'}
                                        value={formData.family.fatherMobile.value}
                                        // onlyCountries={['in', 'de', 'ru']}
                                        onChange={(value, countryData) => {
                                            const countryCodeNumber = countryData?.dialCode;
                                            handleChange({ target: { value } }, "family", "fatherMobile");
                                            handleChange({ target: { value: countryCodeNumber } }, "family", "fatherMobile", "phoneCode")
                                        }}
                                    />


                                </div>
                                {/* <Input endornment={<EmailOutlinedIcon/>} label={item.label} /> */}
                                {/* <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                               <label className='label'>{item.label}</label>
                                               <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                           </div> */}

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "0.2rem" }}>
                                    <label className='label'>Work Telephone</label>

                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <PhoneInput
                                        inputStyle={{ width: "100%" ,background :"#F6F2F8",  height: '2.6rem', }}
                                            // style={{ width: '100%', border: '1px solid lightgray', borderRadius: "12px" }}
                                            country={'kw'}
                                            value={formData.family.fatherWorkTel.value}
                                            // onlyCountries={['in', 'de', 'ru']}
                                            onChange={(value, countryData) => {
                                                const countryCodeNumber = countryData?.dialCode;
                                                handleChange({ target: { value } }, "family", "fatherWorkTel");
                                                handleChange({ target: { value: countryCodeNumber } }, "family", "fatherWorkTel", "phoneCode")
                                            }}
                                        />


                                    </div>
                                </div>
                                {/* <Input endornment={<EmailOutlinedIcon/>} label={item.label} /> */}
                                {/* <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                               <label className='label'>{item.label}</label>
                                               <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                           </div> */}

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <label className='label'>Email Address</label>

                                    <TextField
                                        required={true}
                                        size={"small"}
                                        color='primary'
                                        value={formData.family.fatherEmail.value}
                                        onChange={(e) => handleChange(e, "family", "fatherEmail")}
                                        sx={{
                                            width: "100%",
                                            background: "#F6F2F8",
                                            borderColor: "lightgray",
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'none',
                                                    borderRadius: "12px"// Specify your desired border color here
                                                },
                                                //   '&:hover fieldset': {
                                                //     borderColor: 'green', // Specify your desired hover border color here
                                                //   },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'black', // Specify your desired focused border color here
                                                },
                                            },
                                        }}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>,
                                        }}
                                    />
                                </div>


                            </Grid>





                        </Grid>
                        <Grid item container spacing={1}>



                        </Grid>

                    </Grid>
                </CommonAccordion>
                <CommonAccordion defaultExpanded={true} title={"Mothers Details"}>

                    <Grid container spacing={1}>
                        <Grid item container spacing={1}>


                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.family.motherName.value} handleChange={(e) => handleChange(e, "family", "motherName")} label={"Mother Name"} />
                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input type={"date"} isRequired={true} value={formData.family.motherDob.value} handleChange={(e) => handleChange(e, "family", "motherDob")} label={"DOB"} />


                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.family.motherNationality.value} handleChange={(e) => handleChange(e, "family", "motherNationality")} label={"Nationality"} />


                            </Grid>
                            <Grid xs={12} md={4} item>

                                <Input isRequired={true} value={formData.family.motherCivilId.value} handleChange={(e) => handleChange(e, "family", "motherCivilId")} label={"Civil Id Number"} />


                            </Grid>
                            <Grid xs={12} md={4} item>

                                <Input isRequired={true} value={formData.family.motherOccup.value} handleChange={(e) => handleChange(e, "family", "motherOccup")} label={"Occupation"} />


                            </Grid>
                            <Grid xs={12} md={4} item>

                                <Input isRequired={true} value={formData.family.motherEmployer.value} handleChange={(e) => handleChange(e, "family", "motherEmployer")} label={"Employer"} />


                            </Grid>
                            {/* <Grid xs={12} md={4} item>

                                <Input isRequired={true} value={formData.family.motherOccup.value} handleChange={(e) => handleChange(e, "family", "motherOccup")} label={"Occupation"} />


                            </Grid>
                            <Grid xs={12} md={4} item>

                                <Input isRequired={true} value={formData.family.motherEmployer.value} handleChange={(e) => handleChange(e, "family", "motherEmployer")} label={"Employer"} />


                            </Grid> */}
                            <Grid xs={12} md={4} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", width: "100%" }}>
                                    <label className='label'>Phone Number</label>

                                    <PhoneInput
                                        inputStyle={{ width: "100%" ,background :"#F6F2F8",  height: '2.6rem', }}
                                        country={'kw'}
                                        value={formData.family.motherMobile.value}
                                        // onlyCountries={['in', 'de', 'ru']}
                                        onChange={(value, countryData) => {
                                            const countryCodeNumber = countryData?.dialCode;
                                            handleChange({ target: { value } }, "family", "motherMobile");
                                            handleChange({ target: { value: countryCodeNumber } }, "family", "motherMobile", "phoneCode")
                                        }}
                                    />


                                </div>
                                {/* <Input endornment={<EmailOutlinedIcon/>} label={item.label} /> */}
                                {/* <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                               <label className='label'>{item.label}</label>
                                               <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                           </div> */}

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "0.2rem" }}>
                                    <label className='label'>Work Telephone</label>

                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <PhoneInput
                                            // style={{ width: '100%', border: '1px solid lightgray', borderRadius: "12px" }}
                                            inputStyle={{ width: "100%" ,background :"#F6F2F8",  height: '2.6rem', }}
                                            country={'kw'}
                                            value={formData.family.motherWorkTel.value}
                                            // onlyCountries={['in', 'de', 'ru']}
                                            onChange={(value, countryData) => {
                                                const countryCodeNumber = countryData?.dialCode;
                                                handleChange({ target: { value } }, "family", "motherWorkTel");
                                                handleChange({ target: { value: countryCodeNumber } }, "family", "motherWorkTel", "phoneCode")
                                            }}
                                        />


                                    </div>
                                </div>
                                {/* <Input endornment={<EmailOutlinedIcon/>} label={item.label} /> */}
                                {/* <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                               <label className='label'>{item.label}</label>
                                               <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                           </div> */}

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <label className='label'>Email Address</label>

                                    <TextField
                                        required={true}
                                        size={"small"}
                                        color='primary'
                                        value={formData.family.motherEmail.value}
                                        onChange={(e) => handleChange(e, "family", "motherEmail")}
                                        sx={{
                                            width: "100%",
                                            background: "#F6F2F8",
                                            borderColor: "lightgray",
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'none',
                                                    borderRadius: "12px"// Specify your desired border color here
                                                },
                                                //   '&:hover fieldset': {
                                                //     borderColor: 'green', // Specify your desired hover border color here
                                                //   },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'black', // Specify your desired focused border color here
                                                },
                                            },
                                        }}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><EmailOutlinedIcon /></InputAdornment>,
                                        }}
                                    />
                                </div>
                                {/* <Input endornment={<EmailOutlinedIcon/>} label={item.label} /> */}
                                {/* <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                               <label className='label'>{item.label}</label>
                                               <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                           </div> */}

                            </Grid>


                        </Grid>
                        <Grid item container spacing={1}>



                        </Grid>
                    </Grid>
                </CommonAccordion>




            </Box>
        </Box>
    )
}

export default AdmissionForm2