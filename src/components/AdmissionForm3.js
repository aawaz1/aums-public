import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const AdmissionForm3 = () => {
    const [check1, setChecked1] = useState(false);
    const [check2, setChecked2] = useState(false);

    const handleChange1 = (event) => {
        setChecked1(event.target.checked);
    };
    const handleChange2 = (event) => {
        setChecked2(event.target.checked);
    };
    const CustomCheckboxYes = styled(Checkbox)(({ theme }) => ({
        color: '#B70042', // Set the color of the checkbox itself
        '&.Mui-checked': {
            color: 'blue', // Change color when checked
        },

    }));

    const CustomCheckboxNo = styled(Checkbox)(({ theme }) => ({
        color: '#B70042', // Set the color of the checkbox itself
        '&.Mui-checked': {
            color: 'blue', // Change color when checked
        },

    }));
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: "flex-start", backgroundColor: '#B70042' }}>
                <h4 className='form'>Health Information</h4>
            </Box>
            <Box sx={{ padding: "1rem", fontSize: "1.2rem", fontWeight: "1rem" }}>
                <p>
                    Do You Suffer From any Physical , Learning, Mental Disabilities that may impare your performance at the University ? If Yes Please Provide Describe and Provide Medical Report Stamped From A Recognized Official Institution.
                </p>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <FormControlLabel
                        control={< CustomCheckboxYes Checkbox checked={check1} onChange={handleChange1} />}
                        label="Yes"
                    />
                    <FormControlLabel

                        control={< CustomCheckboxNo Checkbox checked={check2} onChange={handleChange2} />}
                        label="No"
                    />
                </Box>
            </Box>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: "flex-start", flexDirection: "column", padding: "1rem" }}>

                    <h4 style={{ color: "Darkgray", fontSize: "1rem" }} className='form'>If Yes Please Indicate Details</h4>
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
                                    height: "8rem",
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

                    />
                </Box>

            </Box>
        </Box>
    )
}

export default AdmissionForm3