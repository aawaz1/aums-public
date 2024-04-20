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

const AdmissionForm4 = ({ formData, handleChange }) => {
    function createData(
        name,
        calories,
        fat,
        carbs,
        protein
    ) {
        return { name, calories, fat, carbs, protein };
    }

    const initSchool = {
        "name": { value: "", error: "" },
        "type": { value: "", error: "" },
        "gpa": { value: "", error: "" },
        "date": { value: "", error: "" },
        "degree": { value: "", error: "" },
    }

    const initCollege = {
        "name": { value: "", error: "" },
        "type": { value: "", error: "" },
        "country": { value: "", error: "" },
        "gpa": { value: "", error: "" },
        "date": { value: "", error: "" },
        "major": { value: "", error: "" },
        "degree": { value: "", error: "" },
    }
    const option = [{ value: "Excellent", label: "Excellent" }, { value: "Good", label: "Good" }, { value: "Bad", label: "Bad" }]
    const rows = [
        createData('English', <Input select={true} option={option} isRequired={true} value={formData.languages[0].read.value} handleChange={e => {
            handleChange(e, "languages", "0", "read")
        }} />, <Input select={true} option={option} isRequired={true} value={formData.languages[0].write.value} handleChange={e => {
            handleChange(e, "languages", "0", "write")
        }} />, <Input select={true} option={option} isRequired={true} value={formData.languages[0].speak.value} handleChange={e => {
            handleChange(e, "languages", "0", "speak")
        }} />),
        createData('Arabic', <Input select={true} option={option} isRequired={true} value={formData.languages[1].read.value} handleChange={e => {
            handleChange(e, "languages", "1", "read")
        }} />, <Input select={true} option={option} isRequired={true} value={formData.languages[1].write.value} handleChange={e => {
            handleChange(e, "languages", "1", "write")
        }} />, <Input select={true} option={option} isRequired={true} value={formData.languages[1].speak.value} handleChange={e => {
            handleChange(e, "languages", "1", "speak")
        }} />),
        createData(<div style={{ display: "flex", alignItems: "center", gap: 4 }}>Other :  <Input value={formData.languages[2].language.value} handleChange={e => {
            handleChange(e, "languages", "2", "language")
        }} /></div>, <Input select={true} option={option} value={formData.languages[2].read.value} handleChange={e => {
            handleChange(e, "languages", "2", "read")
        }} />, <Input select={true} option={option} value={formData.languages[2].write.value} handleChange={e => {
            handleChange(e, "languages", "2", "write")
        }} />, <Input select={true} option={option} value={formData.languages[2].speak.value} handleChange={e => {
            handleChange(e, "languages", "2", "speak")
        }} />),

    ];
    const [data3, setData3] = useState([

        { acheivement: '', },

    ]);
    const addEmptyRow1 = () => {
        handleChange({ target: { value: [...formData.school.value, initSchool] } }, "school")
    };
    const addEmptyRow2 = () => {
        handleChange({ target: { value: [...formData.college.value, initCollege] } }, "college")
    };
    const addEmptyRow3 = () => {
        setData3([...data3, { id: 1, name: '' }]);
        handleChange({ target: { value: [...formData.archivements.value, { value: "", error: "" }] } }, "archivements")

    };
    console.log(formData.school?.length)

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
                                {formData.school.value.map((row, index) => (
                                    <TableRow
                                        key={row.schoolname}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >

                                        <TableCell align="right"><Input isRequired={true} value={row.name.value} handleChange={(e) => handleChange(e, "school", "value", `${index}`, "name")} /></TableCell>
                                        <TableCell align="right"><Input isRequired={true} value={row.gpa.value} handleChange={(e) => handleChange(e, "school", "value", `${index}`, "gpa")} /></TableCell>
                                        <TableCell align="right"> <Input type={"date"} isRequired={true} value={row.date.value} handleChange={(e) => handleChange(e, "school", "value", `${index}`, "date")} /></TableCell>
                                        <TableCell align="right"><Input isRequired={true} value={row.degree.value} handleChange={(e) => handleChange(e, "school", "value", `${index}`, "degree")} /> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem", borderRadius: "10px", borderColor: " purple" }}>
                        <button type={"button"} style={{ borderRadius: "10px", color: "#B70042", borderColor: "#B70042" }} onClick={() => addEmptyRow1()}>+</button></div>
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
                                {formData.college.value.map((row, index) => (
                                    <TableRow
                                        key={row.schoolname}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >

                                        <TableCell align="right"><Input isRequired={true} value={row.name.value} handleChange={(e) => handleChange(e, "college", "value", `${index}`, "name")} /></TableCell>
                                        <TableCell align="right"><Input isRequired={true} value={row.country.value} handleChange={(e) => handleChange(e, "college", "value", `${index}`, "country")} /></TableCell>
                                        <TableCell align="right"> <Input isRequired={true} value={row.gpa.value} handleChange={(e) => handleChange(e, "college", "value", `${index}`, "gpa")} /></TableCell>
                                        <TableCell align="right"><Input isRequired={true} value={row.major.value} handleChange={(e) => handleChange(e, "college", "value", `${index}`, "major")} /> </TableCell>
                                        <TableCell align="right"><Input isRequired={true} value={row.degree.value} handleChange={(e) => handleChange(e, "college", "value", `${index}`, "degree")} /> </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem", borderRadius: "10px", borderColor: " purple" }}><button type={"button"} style={{ borderRadius: "10px", color: "#B70042", borderColor: "#B70042" }} onClick={() => addEmptyRow2()}>+</button></div>
                </CommonAccordion>

                <Box sx={{ padding: "2rem" }}>
                    <h4>Acadamic Distinctions , Prizes, Awards , etc (Indicate Years)</h4>
                    <div>
                        {formData.archivements.value.map((row, index) => {
                            return (
                                <div style={{ padding: "0.5rem" }}>
                                    <Input isRequired={true} sx={{ padding: "1rem" }}
                                        value={row.value}
                                        handleChange={(e) => handleChange(e, "archivements", "value", `${index}`)}
                                    />
                                </div>)
                        })}</div>
                    <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem", borderRadius: "10px", borderColor: " purple" }}><button type={"button"} style={{ borderRadius: "10px", color: "#B70042", borderColor: "#B70042" }} onClick={() => addEmptyRow3()}>+</button></div>
                </Box>

                <Box sx={{ padding: "0.5rem" }}>
                    <AdmissionForm5 formData={formData} handleChange={handleChange} />

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