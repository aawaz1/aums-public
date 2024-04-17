import { Box, Grid } from '@mui/material'
import React from 'react'
import './AdmissionForm.css';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const AdmissionForm = () => {
    return (
        <Box sx={{ gap: "10rem" }}>
            <Box sx={{ display: 'flex', justifyContent: "flex-start", backgroundColor: '#B70042' }}>
                <h4 className='form'>Personal Information</h4>
            </Box>
            <Box>
                <div>
                    <Accordion sx={{ padding: "1rem" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{ color: "black", backgroundColor: "lightgray", borderRadius: '10px', fontSize: "1.2rem", }}
                        >
                            Personal Details
                        </AccordionSummary>
                        <AccordionDetails sx={{ paddingTop: '1rem', paddingBottom: "1rem" }}>
                            <Grid container spacing={1}>
                                <Grid item container spacing={1}>
                                    <Grid xs={12} md={4} item>
                                        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                            <label className='label'>First Name</label>
                                            <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                        </div>
                                    </Grid>
                                    <Grid xs={12} md={4} item> <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                        <label className='label' >Middle Name</label>
                                        <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                    </div></Grid>
                                    <Grid xs={12} md={4} item > <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                        <label className='label'>Family Name</label>
                                        <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                    </div></Grid>


                                </Grid>
                                <Grid item container spacing={1}>
                                    <Grid xs={12} md={4} item>
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
                                    </div></Grid>


                                </Grid>
                                <Grid item container spacing={1}>
                                    <Grid xs={12} md={4} item>
                                        <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                            <label className="label">Civil ID Number</label>
                                            <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
                                        </div>
                                    </Grid>



                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>


                </div>
            </Box>
        </Box>
    )
}

export default AdmissionForm