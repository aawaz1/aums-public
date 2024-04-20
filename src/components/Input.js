import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

const Input = ({ label, size, endornment, schoolname, option, value, variant, handleChange, type, select, isRequired }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "0.3rem" }}>
      {label ? <label className='label'>{label}</label> : null}

      <TextField
        required={isRequired}
        size={size}
        color='primary'
        type={type}
        select={select}
        // id="outlined-start-adornment"
        // sx={{ m: 1, width: '100%' }}
        sx={{
          background :"#F6F2F8",
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
        onChange={handleChange} >
        {option?.map(data => {
          return <MenuItem value={data?.value} key={data.value}>{data?.label}</MenuItem>
        })}

      </TextField>
    </div>

  )
}

Input.defaultProps = {
  size: "small",
  variant: "outlined",
  type: "text",
  value: "",
  select: false,
  option: null,
  isRequired: false

}

export default Input