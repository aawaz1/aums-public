import { Box } from '@mui/material'
import React, { useState } from 'react'
import './AdmissionForm.css';

import { Grid } from '@mui/material';
import { Data } from './data';
import MenuItem from '@mui/material/MenuItem';


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

const AdmissionForm4 = ({ title }) => {
    const [data, setData1] = useState([
        // Initial data
        { schoolname: 'ef', gpa: 0, graduationdate: 0, degreeawarded: 0, },

    ]);
    const [data2, setData2] = useState([

        { collegename: 'ef', country: "kuwait", gpa: 0, major: 0, diploma: 0 },

    ]);
    const addEmptyRow1 = () => {
        setData1([...data, { id: data.length + 1, name: '' }]);

    };
    const addEmptyRow2 = () => {
        setData2([...data, { id: data.length + 1, name: '' }]);

    };

    return (
        <Box sx={{ gap: "10rem" }}>
            <Box sx={{ display: 'flex', justifyContent: "flex-start", backgroundColor: '#B70042' }}>
                <h4 className='form'>Personal Information</h4>
            </Box>
            <Box>
                <CommonAccordion defaultExpanded={true} title={"School Details"}>
                    <Box><h4>Secondary School Education Details</h4></Box>

                    <TableContainer component={Paper}  >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                            <TableHead >
                                <TableRow >
                                    <TableCell >School Name</TableCell>
                                    <TableCell align="right">GPA</TableCell>
                                    <TableCell align="right">Graduation Date</TableCell>
                                    <TableCell align="right">Degree Rewarded</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow
                                        key={row.schoolname}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >

                                        <TableCell align="right"><Input schoolname={row.schoolname} variant={"standard"}/></TableCell>
                                        <TableCell align="right"><Input2 schoolname={row.gpa} /></TableCell>
                                        <TableCell align="right"> <Input2 schoolname={row.graduationdate} /></TableCell>
                                        <TableCell align="right"><Input schoolname={row.degreeawarded} /> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem", borderRadius: "10px", borderColor: " purple" }}><button style={{ borderRadius: "10px", color: "#B70042", borderColor: "#B70042" }} onClick={() => addEmptyRow1()}>+</button></div>
                </CommonAccordion>
                <CommonAccordion defaultExpanded={true} title={"College/University Details"}>
                    <Box><h4>List All Colleges and Universities you attended starting with the most recent (if not applicable skip this section)</h4></Box>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>College/University Name</TableCell>
                                    <TableCell align="right">Country</TableCell>
                                    <TableCell align="right">GPA</TableCell>
                                    <TableCell align="right">Major</TableCell>
                                    <TableCell align="right">Diploma/Certificate</TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow
                                        key={row.schoolname}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >

                                        <TableCell align="right"><Input2 schoolname={row.schoolname} /></TableCell>
                                        <TableCell align="right"><Input2 schoolname={row.gpa} /></TableCell>
                                        <TableCell align="right"> <Input2 schoolname={row.graduationdate} /></TableCell>
                                        <TableCell align="right"><Input schoolname={row.degreeawarded} /> </TableCell>
                                        <TableCell align="right"><Input schoolname={row.degreeawarded} /> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem", borderRadius: "10px", borderColor: " purple" }}><button style={{ borderRadius: "10px", color: "#B70042", borderColor: "#B70042" }} onClick={() => addEmptyRow1()}>+</button></div>
                </CommonAccordion>





            </Box>
        </Box>
    )
}

export default AdmissionForm4