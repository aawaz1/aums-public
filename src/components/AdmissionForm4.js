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
import AdmissionForm3 from './AdmissionForm3';
import AdmissionForm5 from './AdmissionForm5';

const AdmissionForm4 = ({ title }) => {
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
        createData('English',<Input/>,<Input/>,<Input/>),
        createData('Arabic',<Input/>,<Input/>,<Input/>),
        createData('Other',<Input/>,<Input/>,<Input/>),
       
      ];
    const [data, setData1] = useState([
        // Initial data
        { schoolname: '', gpa: null, graduationdate: null, degreeawarded: null, },

    ]);
    const [data2, setData2] = useState([

        { collegename: '', country: "kuwait", gpa: 0, major: 0, diploma: 0 },

    ]);
    const [data3, setData3] = useState([

        { acheivement: '', },

    ]);
    const addEmptyRow1 = () => {
        setData1([...data, { id: data.length + 1, name: '' }]);

    };
    const addEmptyRow2 = () => {
        setData2([...data2, { id: data.length + 1, name: '' }]);

    };
    const addEmptyRow3 = () => {
        setData3([...data3, { id: data.length + 1, name: '' }]);

    };

    return (
        <Box sx={{ gap: "10rem" }}>
            <Box sx={{ display: 'flex', justifyContent: "flex-start", backgroundColor: '#B70042' }}>
                <h4 className='form'>Academic Information</h4>
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

                                        <TableCell align="right"><Input schoolname={row.schoolname}/></TableCell>
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
                                {data2.map((row) => (
                                    <TableRow
                                        key={row.schoolname}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >

                                        <TableCell align="right"><Input2 collegename={row.collegename} /></TableCell>
                                        <TableCell align="right"><Input2 country={row.country} /></TableCell>
                                        <TableCell align="right"> <Input2 gpa={row.gpa} /></TableCell>
                                        <TableCell align="right"><Input major={row.major} /> </TableCell>
                                        <TableCell align="right"><Input diploma={row.diploma} /> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem", borderRadius: "10px", borderColor: " purple" }}><button style={{ borderRadius: "10px", color: "#B70042", borderColor: "#B70042" }} onClick={() => addEmptyRow2()}>+</button></div>
                </CommonAccordion>

                <Box sx={{padding : "2rem"}}>
                    <h4>Acadamic Distinctions , Prizes, Awards , etc (Indicate Years)</h4>
                   <div>
                   {data3.map(row => {
                   return ( <div style={{padding  :"0.5rem"}}><Input sx={{padding :"1rem"}} acheivement= {row.acheivement}/></div>)})}</div>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem", borderRadius: "10px", borderColor: " purple" }}><button style={{ borderRadius: "10px", color: "#B70042", borderColor: "#B70042" }} onClick={() => addEmptyRow3()}>+</button></div>
                </Box>

                <Box sx={{padding : "0.5rem"}}>
                    <AdmissionForm5/>

                </Box>
               





            </Box>
              <CommonAccordion defaultExpanded={true} title={"Language Proficiency Details"}>
                    <Box><h4>Language Proficiency (Excellent , Good or Bad)</h4></Box>

                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Language Name </TableCell>
            <TableCell align="right">Spoken</TableCell>
            <TableCell align="right">Written</TableCell>
            <TableCell align="right">Read</TableCell>
            
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
              <TableCell align="right">{row.carbs}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

                </CommonAccordion>
        </Box>
    )
}

export default AdmissionForm4