import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const Input = ({ label, size, endornment, schoolname, value, variant, handleChange ,type }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "0.3rem" }}>
      {label ? <label className='label'>{label}</label> : null}

      <TextField
        size={size}
        color='primary'
        type={type}
        // id="outlined-start-adornment"
        // sx={{ m: 1, width: '100%' }}
        sx={{
          width: "100%",
          borderColor: "lightgray",
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'none',
              borderRadius: "8px"// Specify your desired border color here
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
          startAdornment: <InputAdornment position="start">{endornment}</InputAdornment>,
        }}
        variant={variant}

        value={value}
        onChange={handleChange} />
    </div>

  )
}

Input.defaultProps = {
  size: "small",
  variant: "outlined",
  type : "text",
  value : ""

}

export default Input