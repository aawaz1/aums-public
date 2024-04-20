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

const AdmissionForm2 = ({ formData , handleChange}) => {
    const [phone, setPhone] = useState("")

    return (
        <Box sx={{ gap: "10rem" }}>
            <Box sx={{ display: 'flex', justifyContent: "flex-start", backgroundColor: '#B70042', padding: "0.2rem" }}>
                <h4  className='form'>Family Information</h4>
            </Box>
            <Box>
                <CommonAccordion defaultExpanded={true} title={"Fathers Details"}>

                    <Grid container spacing={1}>
                        <Grid item container spacing={1}>
                          
                                
                                    <Grid xs={12} md={4} item>
                                       
                                         <Input value={formData.address.home.value} handleChange={(e) => handleChange(e, "family", "fatherName")} label={"Fathers Name"} />
                                       

                                    </Grid>
                                    <Grid xs={12} md={4} item>
                                       
                                       <Input value={formData.address.home.value} handleChange={(e) => handleChange(e, "family", "fatherDob")} label={"DOB"} />
                                     

                                  </Grid>
                                  <Grid xs={12} md={4} item>
                                       
                                       <Input value={formData.address.home.value} handleChange={(e) => handleChange(e, "family", "fatherNationality")} label={"Nationality"} />
                                     

                                  </Grid>
                                  <Grid xs={12} md={4} item>
                                       
                                       <Input value={formData.address.home.value} handleChange={(e) => handleChange(e, "family", "fatherCivilId")} label={"Civil Id Number"} />
                                     

                                  </Grid>
                                  <Grid xs={12} md={4} item>
                                       
                                       <Input value={formData.address.home.value} handleChange={(e) => handleChange(e, "family", "fatherCivilId")} label={"Civil Id Number"} />
                                     

                                  </Grid>
                                  <Grid xs={12} md={4} item>
                                       
                                       <Input value={formData.address.home.value} handleChange={(e) => handleChange(e, "family", "fatherOccup")} label={"Occupation"} />
                                     

                                  </Grid>
                                  <Grid xs={12} md={4} item>
                                       
                                       <Input value={formData.address.home.value} handleChange={(e) => handleChange(e, "family", "fatherEmployer")} label={"Occupation"} />
                                     

                                  </Grid>
                                  
                                   

                                
                            
                            <Grid xs={12} md={4} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <label className='label'>Phone Number</label>

                                    <PhoneInput
                                        
                                        country={'ku'}
                                        value={phone}
                                        onChange={phone => setPhone(phone)}
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
                                            country={'ku'}
                                            value={phone}
                                            onChange={phone => setPhone(phone)}
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
                            {/* {Data.Data2.map(item => {
                                    return (<Grid xs={12} md={item.screen} item>
                                        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                            <label className='label'>{item.label}</label>
                                            <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                        </div>

                                    </Grid>)
                                })} */}
                            {/* <Grid xs={12} md={4} item>
                                    <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                        <label className="label">DOB</label>
                                        <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                    </div>
                                </Grid>
                                <Grid xs={12} md={4} item> <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <label className="label">Gender</label>
                                    <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                </div></Grid>
                                <Grid xs={12} md={4} item > <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <label className="label">Martial Status</label>
                                    <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                </div></Grid> */}


                        </Grid>

                    </Grid>
                </CommonAccordion>
                <CommonAccordion defaultExpanded={true} title={"Mothers Details"}>

                    <Grid container spacing={1}>
                        <Grid item container spacing={1}>
                            {FormData.Data2.map(item => {
                                return (
                                    <Grid xs={12} md={4} item>
                                        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                            <label className='label'>{item.label}</label>

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
                                                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                                                }}
                                            />
                                        </div>
                                        {/* <Input endornment={<EmailOutlinedIcon/>} label={item.label} /> */}
                                        {/* <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                                   <label className='label'>{item.label}</label>
                                                   <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                               </div> */}

                                    </Grid>

                                )
                            })}
                            <Grid xs={12} md={4} item>
                                <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                    <label className='label'>Phone Number</label>

                                    <PhoneInput
                                        // style={{ width: '100%', border: '1px solid lightgray', borderRadius: "12px" }}
                                        country={'ku'}
                                        value={phone}
                                        onChange={phone => setPhone(phone)}
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
                                            country={'ku'}
                                            value={phone}
                                            onChange={phone => setPhone(phone)}
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


                    </Grid>
                </CommonAccordion>




            </Box>
        </Box>
    )
}

export default AdmissionForm2