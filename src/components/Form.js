import { Box, Checkbox, FormControlLabel, styled } from '@mui/material'
import React, { useState } from 'react'
import './AdmissionForm.css';

import { Grid } from '@mui/material';

import MenuItem from '@mui/material/MenuItem';


import CommonAccordion from './CommonAccordion';
import Input from './Input';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Data } from './Details';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import 'react-phone-input-2/lib/style.css';
import './phoneInput.css'
import PhoneInput from 'react-phone-input-2';

const Form = ({ formData, handleChange }) => {
   
    const CustomCheckboxYes = styled(Checkbox)(({ theme }) => ({
        color: '#B70042', // Set the color of the checkbox itself
        '&.Mui-checked': {
            color: 'blue', // Change color when checked
        },

    }));
    function createData(
        name,
        calories,
        fat,
        carbs,
        protein
    ) {
        return { name, calories, fat, carbs, protein };
    }
    const rows = [
        createData('Myself', "", <Input />),
        createData('Ministry', "", <Input />),
        createData('Others', "", <Input />),

    ];
    return (
        <Box sx={{ gap: "10rem" }}>
            <Box sx={{ display: 'flex', justifyContent: "flex-start", backgroundColor: '#B70042', padding: "0.2rem" }}>
                <h4 className='form'>Emergrency Contact & Sponsorship Information</h4>
            </Box>
            <Box>
                <CommonAccordion defaultExpanded={true} title={"Emergrency Contact Details"}>

                    <Grid container spacing={1}>
                        <Grid item container spacing={1}>
                            <Grid xs={12} md={6} item>
                                <Input label={"Name"} value={formData.emergency[0].name.value} handleChange={(e) => handleChange(e, "emergency", "0", "name")} />

                            </Grid>
                            <Grid xs={12} md={6} item>
                                <Input label={"Name"} value={formData.emergency[1].name.value} handleChange={(e) => handleChange(e, "emergency", "1", "name")} />

                            </Grid>
                            <Grid xs={12} md={6} item>
                                <Input label={"Relationship"} value={formData.emergency[0].relationship.value} handleChange={(e) => handleChange(e, "emergency", "0", "relationship")} />

                            </Grid>
                            <Grid xs={12} md={6} item>
                                <Input label={"Relationship"} value={formData.emergency[1].relationship.value} handleChange={(e) => handleChange(e, "emergency", "1", "relationship")} />

                            </Grid>
                            <Grid xs={12} md={6} item>
                                <Input label={"Civil ID Number"} value={formData.emergency[0].civilId.value} handleChange={(e) => handleChange(e, "emergency", "0", "civilId")} />

                            </Grid>
                            <Grid xs={12} md={6} item>
                                <Input label={"Civil ID Number"} value={formData.emergency[1].civilId.value} handleChange={(e) => handleChange(e, "emergency", "1", "civilId")} />

                            </Grid>




                        </Grid>
                        <Grid xs={12} md={6} item>
                            <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                <label className='label'>Phone Number</label>


                                <PhoneInput
                                    inputStyle={{
                                        width: '100%',
                                        border: '1px solid lightgray',
                                        borderRadius: '12px',
                                        /* Add any additional styles you need */
                                    }}
                                    country={'kw'}
                                    value={formData.emergency[0].contact.value}
                                    // onlyCountries={['in', 'de', 'ru']}
                                    onChange={(value, countryData) => {
                                        const countryCodeNumber = countryData?.dialCode;
                                        handleChange({ target: { value } }, "emergency", "0", "contact");
                                        handleChange({ target: { value: countryCodeNumber } }, "emergency", "0", "contact", "phoneCode")
                                    }}
                                />
                            </div>
                            {/* <Input endornment={<EmailOutlinedIcon/>} label={item.label} /> */}
                            {/* <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                               <label className='label'>{item.label}</label>
                                               <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                           </div> */}

                        </Grid>
                        <Grid xs={12} md={6} item>
                            <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                <label className='label'>Phone Number</label>


                                <PhoneInput
                                    inputStyle={{
                                        width: '100%',
                                        border: '1px solid lightgray',
                                        borderRadius: '12px',
                                        /* Add any additional styles you need */
                                    }}
                                    country={'kw'}
                                    value={formData.emergency[1].contact.value}
                                    // onlyCountries={['in', 'de', 'ru']}
                                    onChange={(value, countryData) => {
                                        const countryCodeNumber = countryData?.dialCode;
                                        handleChange({ target: { value } }, "emergency", "1", "contact");
                                        handleChange({ target: { value: countryCodeNumber } }, "emergency", "1", "contact", "phoneCode")
                                    }}
                                />
                            </div>
                            {/* <Input endornment={<EmailOutlinedIcon/>} label={item.label} /> */}
                            {/* <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                               <label className='label'>{item.label}</label>
                                               <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                           </div> */}

                        </Grid>
                        <Grid item container spacing={1}>


                        </Grid>

                    </Grid>
                </CommonAccordion>
                <CommonAccordion defaultExpanded={true} title={"SponsorShip Details"}>
                    <Box><h4>How Do You Expect To Meet The Cost Of Tution And Other Expenses ? Check All That Applies </h4></Box>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 700 }}> Parents </TableCell>
                                    <TableCell align="right"> </TableCell>
                                    <TableCell align="right">
                                        <Input/>
                                    </TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>


                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </CommonAccordion>
                <Box sx={{ padding: '2rem' }}>
                    <Box ><h4>Declaration & Acknowledgment </h4></Box>
                    <Box sx={{ display: 'flex' }}>
                        <div style={{ border: "2px solid redx" }}><FormControlLabel
                            control={< CustomCheckboxYes Checkbox  checked={formData.isDeclared.value === true} onChange={(e) => {
                                handleChange({ target: { value: e.target.checked } }, "isDeclared")
    
                            }}/>}

                        /></div>
                        <div>I The Undersigned hereby certify that the above Information is complete , accurate and correct . I authorize AUMS and related officials to verify alL statements contains therein and give the University the absolute discreation to use these documents whenever and whatever it seems fit in the connection with the tasks
                            <br /> Withholding Information , misrepresentation or forgery of the presented documents renders me subject to immediate dismissal from the school and all the applicable legal penalities.
                            <br />
                            All Documents presented by the applicant  to complete a file for admission  become the property of AUMS </div>
                    </Box></Box>




            </Box>
        </Box>
    )
}

export default Form