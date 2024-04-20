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
import 'react-phone-input-2/lib/style.css';
import './phoneInput.css'
import PhoneInput from 'react-phone-input-2';


const AdmissionForm = ({ formData, handleChange }) => {

    const [phone, setPhone] = useState("");

    return (
        <Box sx={{ gap: "10rem" }}>
            <Box sx={{ display: 'flex', justifyContent: "flex-start", backgroundColor: '#B70042', padding: "0.2rem" }}>
                <h4 className='form'>Personal Information</h4>
            </Box>
            <Box>
                <CommonAccordion defaultExpanded={true} title={"Personal Details"}>

                    <Grid container spacing={1}>
                        <Grid item container spacing={4}>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.firstName.value} handleChange={(e) => handleChange(e, "firstName")} label={"First Name"} />

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.middleName.value} handleChange={(e) => handleChange(e, "middleName")} label={"Middle Name"} />

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.lastName.value} handleChange={(e) => handleChange(e, "lastName")} label={"Family Name"} />

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.dob.value} type={"date"} handleChange={(e) => handleChange(e, "dob")} label={"Date Of Birth"} />

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.gender.value} handleChange={(e) => handleChange(e, "gender")} label={"Gender"}
                                    option={formData.gender.option}
                                    select={true}
                                />
                                {/* <Select label={"Gender"} /> */}

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.maritalStatus.value} handleChange={(e) => handleChange(e, "maritalStatus")} label={"Martial Status"}
                                    option={formData.maritalStatus.option}
                                    select={true}
                                />


                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.civilId.value} handleChange={(e) => handleChange(e, "civilId")} label={"Civil ID Number"} />

                            </Grid>

                        </Grid>
                        <Grid item container spacing={1}>
                        </Grid>

                    </Grid>
                </CommonAccordion>
                <CommonAccordion defaultExpanded={true} title={"Address Details"}>
                    <Grid container spacing={1}>
                        <Grid item container spacing={4}>
                            <Grid xs={12} md={12} item>
                                <Input isRequired={true} value={formData.address.home.value} handleChange={(e) => handleChange(e, "address", "home")} label={"Home Address"} />

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.address.block.value} handleChange={(e) => handleChange(e, "address", "block")} label={"Block"} />

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.address.street.value} handleChange={(e) => handleChange(e, "address", "street")} label={"Street "} />

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.address.appartment.value} handleChange={(e) => handleChange(e, "address", "appartment")} label={"House Apartment"} />

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.address.area.value} handleChange={(e) => handleChange(e, "address", "area")} label={"Area"} />

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input value={formData.address.jaddah.value} handleChange={(e) => handleChange(e, "address", "jaddah")} label={"Jaddah"} />

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.address.country.value} handleChange={(e) => handleChange(e, "address", "country")} label={"Country"} />

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.address.po.value} handleChange={(e) => handleChange(e, "address", "po")} label={"PO Box"} />

                            </Grid>
                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.address.zipCode.value} handleChange={(e) => handleChange(e, "address", "zipCode")} label={"Zip Code"} />

                            </Grid>



                            <Grid xs={12} md={4} item>
                                <Input isRequired={true} value={formData.address.governorate.value} handleChange={(e) => handleChange(e, "address", "governorate")} label={"Governates"} />
                            </Grid>




                        </Grid>
                        <Grid item container spacing={1}>
                        </Grid>

                    </Grid>
                </CommonAccordion>
                <CommonAccordion defaultExpanded={true} title={"Contact Details"}>

                    <Grid container spacing={1}>
                        <Grid item container spacing={4}>

                            <Grid xs={12} md={6} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "0.5rem" }}>
                                    <label className='label'>Phone Number</label>

                                    <PhoneInput
                                        inputStyle={{
                                            width: '100%',
                                            border: '1px solid lightgray',
                                            borderRadius: '12px',
                                            /* Add any additional styles you need */
                                        }}
                                        country={'kw'}
                                        value={formData.mobileOne.value}
                                        // onlyCountries={['in', 'de', 'ru']}
                                        onChange={(value, countryData) => {
                                            const countryCodeNumber = countryData?.dialCode;
                                            handleChange({ target: { value } }, "mobileOne");
                                            handleChange({ target: { value: countryCodeNumber } }, "mobileOne", "phoneCode")
                                        }}
                                    />
                                </div>


                            </Grid>
                            <Grid xs={12} md={6} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "0.5rem" }}>
                                    <label className='label'>Phone Number Optional</label>


                                    <PhoneInput
                                        inputStyle={{
                                            width: '100%',
                                            border: '1px solid lightgray',
                                            borderRadius: '12px',

                                        }}
                                        country={'kw'}
                                        value={formData.mobileTwo.value}
                                        onChange={(value, countryData) => {
                                            const countryCodeNumber = countryData?.dialCode;
                                            handleChange({ target: { value } }, "mobileTwo");
                                            handleChange({ target: { value: countryCodeNumber } }, "mobileTwo", "phoneCode")
                                            console.log("Country Code Number:", countryCodeNumber);

                                        }}
                                    />
                                </div>


                            </Grid>
                            <Grid xs={12} md={6} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "0.5rem" }}>
                                    <label className='label'>Home Telephone </label>

                                    <PhoneInput
                                        inputStyle={{
                                            width: '100%',
                                            border: '1px solid lightgray',
                                            borderRadius: '12px',
                                            /* Add any additional styles you need */
                                        }}
                                        country={'kw'}
                                        value={formData.homeTelOne.value}
                                        onChange={(value, countryData) => {
                                            const countryCodeNumber = countryData?.dialCode;
                                            handleChange({ target: { value } }, "homeTelOne");
                                            handleChange({ target: { value: countryCodeNumber } }, "homeTelOne", "phoneCode")
                                            console.log("Country Code Number:", countryCodeNumber);

                                        }}
                                    />
                                </div>


                            </Grid>
                            <Grid xs={12} md={6} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "0.5rem" }}>
                                    <label className='label'>Home Telephone (Optional)</label>

                                    <PhoneInput
                                        inputStyle={{
                                            width: '100%',
                                            border: '1px solid lightgray',
                                            borderRadius: '12px',
                                            /* Add any additional styles you need */
                                        }}
                                        country={'kw'}
                                        value={formData.homeTelTwo.value}
                                        onChange={(value, countryData) => {
                                            const countryCodeNumber = countryData?.dialCode;
                                            handleChange({ target: { value } }, "homeTelTwo");
                                            handleChange({ target: { value: countryCodeNumber } }, "homeTelTwo", "phoneCode")
                                            console.log("Country Code Number:", countryCodeNumber);

                                        }}
                                    />
                                </div>


                            </Grid>
                            <Grid xs={12} md={6} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "0.5rem" }}>
                                    <label className='label'>Work Telephone</label>


                                    <PhoneInput
                                        inputStyle={{
                                            width: '100%',
                                            border: '1px solid lightgray',
                                            borderRadius: '12px',
                                            /* Add any additional styles you need */
                                        }}
                                        country={'kw'}
                                        value={formData.workTel.value}
                                        onChange={(value, countryData) => {
                                            const countryCodeNumber = countryData?.dialCode;
                                            handleChange({ target: { value } }, "workTel");
                                            handleChange({ target: { value: countryCodeNumber } }, "workTel", "phoneCode")
                                            console.log("Country Code Number:", countryCodeNumber);

                                        }}
                                    />
                                </div>


                            </Grid>
                            <Grid xs={12} md={6} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "0.5rem" }}>
                                    <label className='label'>Fax Telephone</label>


                                    <PhoneInput
                                        inputStyle={{
                                            width: '100%',
                                            border: '1px solid lightgray',
                                            borderRadius: '12px',
                                            /* Add any additional styles you need */
                                        }}
                                        country={'kw'}
                                        value={formData.faxTel.value}
                                        onChange={(value, countryData) => {
                                            const countryCodeNumber = countryData?.dialCode;
                                            handleChange({ target: { value } }, "faxTel");
                                            handleChange({ target: { value: countryCodeNumber } }, "faxTel", "phoneCode")
                                            console.log("Country Code Number:", countryCodeNumber);

                                        }}
                                    />
                                </div>


                            </Grid>
                            <Grid xs={12} md={6} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "0.3rem" }}>
                                    <label className='label'>Email Address</label>


                                    <TextField
                                        required={true}
                                        size={"small"}
                                        color='primary'
                                        // id="outlined-start-adornment"
                                        // sx={{ m: 1, width: '100%' }}
                                        sx={{
                                            width: "100%",
                                            borderColor: "lightgray",
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'none',
                                                    borderRadius: "8px"// Specify your desired border color here
                                                },

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
                            <Grid xs={12} md={6} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "0.3rem" }}>
                                    <label className='label'>Email Address (Optional)</label>


                                    <TextField
                                        size={"small"}
                                        color='primary'
                                        // id="outlined-start-adornment"
                                        // sx={{ m: 1, width: '100%' }}
                                        sx={{
                                            width: "100%",
                                            borderColor: "lightgray",
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: 'none',
                                                    borderRadius: "8px"// Specify your desired border color here
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
                <CommonAccordion defaultExpanded={true} title={"Nationality & Residency"}>

                    <Grid container spacing={1}>
                        <Grid item container spacing={1}>

                            <Grid xs={12} md={6} item>
                                <Input isRequired={true} endornment={null} value={formData.nationality.value} handleChange={(e) => handleChange(e, "nationality")} label={"Country Of Nationlity"} />

                            </Grid>
                            <Grid xs={12} md={6} item>
                                <Input isRequired={true} endornment={null} label={'Country Of Birth'} value={formData.birthCountry.value} handleChange={(e) => handleChange(e, "birthCountry")} />

                            </Grid>
                            <Grid xs={12} md={6} item>
                                <Input isRequired={true} endornment={null} label={"Passport Number"} value={formData.passport.value} handleChange={(e) => handleChange(e, "passport")} />

                            </Grid>
                            <Grid xs={12} md={6} item>
                                <Input isRequired={true} endornment={null} label={"Validity Of Residency"} value={formData.residency.value} handleChange={(e) => handleChange(e, "residency")} />

                            </Grid>
                            <Grid xs={12} md={6} item>
                                <Input isRequired={true} endornment={null} label={"Security Card Number"} value={formData.securityCard.value} handleChange={(e) => handleChange(e, "securityCard")} />

                            </Grid>
                            {/* <Grid xs={12} md={item.screen} item>
                                    <Input endornment={null} label={item.label} />

                                </Grid> */}




                        </Grid>
                        <Grid item container spacing={1}>



                        </Grid>

                    </Grid>
                </CommonAccordion>



            </Box>
        </Box>
    )
}

export default AdmissionForm