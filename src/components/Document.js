import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import CommonAccordion from './CommonAccordion';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Input from './Input';
import Input2 from './Input2';
import Download from './Download';

const Document = ({ formData, handleChange }) => {
    const [check1, setChecked1] = useState(false);
    const [check2, setChecked2] = useState(false);
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
        <Box sx={{}}>
            <Box sx={{ display: 'flex', justifyContent: "flex-start", backgroundColor: '#B70042' }}>
                <h4 className='form'>Documents</h4>
            </Box>

            <Box sx={{ padding: "0.5rem", color: "#606060" }}>
                <Box>
                    <h4>Upload the following documents PDF only  </h4>
                </Box>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell> 1</TableCell>
                                <TableCell sx={{ fontWeight: "700" }} align="left">Passport Photograph Attached </TableCell>
                                <TableCell align="right"><Download formData={formData} handleChange={handleChange} value={'photograph'}/></TableCell>


                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell> 2</TableCell>
                                <TableCell sx={{ fontWeight: "700" }} align="left">Official transcript (signed) with attestation from Ministry of Education in Kuwait for non-governmental schools.</TableCell>
                                <TableCell align="right"><Download formData={formData} handleChange={handleChange} value={'transcript'} /></TableCell>


                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell> 3</TableCell>
                                <TableCell sx={{ fontWeight: "700" }} align="left">One Copy of TOEFL or IELTS score.</TableCell>
                                <TableCell align="right"><Download formData={formData} handleChange={handleChange} value={'toefl'} /></TableCell>


                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell> 4</TableCell>
                                <TableCell sx={{ fontWeight: "700" }} align="left">High school original Certificate with attestation from Ministry of Education in Kuwait.
                                </TableCell>
                                <TableCell align="right"><Download  formData={formData} handleChange={handleChange} value={'highschool'} /></TableCell>


                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell> 5</TableCell>
                                <TableCell sx={{ fontWeight: "700" }} align="left"> Copy of the Valid Kuwait Civil ID card and Valid Passport Copy.
                                    <br />
                                    1. Civil Id copy upload
                                    <br />
                                    2. Passport Copy upload
                                </TableCell>
                                <TableCell align="left">
                                    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                                        <Download formData={formData} handleChange={handleChange} value={'civilid'}/>
                                        <Download formData={formData} handleChange={handleChange} value={'passport'} /></div></TableCell>


                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell> 6</TableCell>
                                <TableCell sx={{ fontWeight: "700" }} align="left">Applicant of 21 years of age or above and been discontinued from studying for more than one academic year, must submit a recent valid clear criminal record (not exceeding 3 months) upon application.</TableCell>
                                <TableCell align="right"><Download formData={formData} handleChange={handleChange} value={'record'}/></TableCell>


                            </TableRow>
                        </TableHead>
                        <TableHead>
                            <TableRow>
                                <TableCell> 7</TableCell>
                                <TableCell sx={{ fontWeight: "700" }} align="left">Certificate of Good Conduct.</TableCell>
                                <TableCell align="right"><Download formData={formData} handleChange={handleChange} value={'goodconduct'}/></TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {rows.map((row) => (
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
          ))} */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>


        </Box>
    )
}

export default Document