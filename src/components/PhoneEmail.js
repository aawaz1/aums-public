import { Grid, InputAdornment, TextField } from '@mui/material'
import React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const PhoneEmail = () => {
  return (
    <div> 
        <Grid container>
        <Grid xs={12} md={6} item>
    <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
        <label className='label'>Phone Number</label>

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
                startAdornment: <InputAdornment position="start">+965</InputAdornment>,
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
        <label className='label'>Work Telephone</label>

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
                startAdornment: <InputAdornment position="start">+965</InputAdornment>,
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
                startAdornment: <InputAdornment position="start"><EmailOutlinedIcon/></InputAdornment>,
            }}
        />
    </div>
    

</Grid>

        </Grid>
        
</div>
  )
}

export default PhoneEmail