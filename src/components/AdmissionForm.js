import { Box, Grid } from '@mui/material'
import React from 'react'
import './AdmissionForm.css';

import Carousal from './carousal';

const AdmissionForm = () => {
    return (
        <Box sx={{ gap: "10rem" }}>
            <Box sx={{ display: 'flex', justifyContent: "flex-start", backgroundColor: '#B70042' }}>
                <h4 className='form'>Personal Information</h4>
            </Box>
            <Box>
                <Carousal title={"Personal Details"} />
                <Carousal title={"Address Details"} />
                <Carousal title={"Contact Details"} />
                <Carousal title={"Nationality & Residency"} />
            </Box>
        </Box>
    )
}

export default AdmissionForm