import { Box } from "@mui/material"

const Download = () => {
  return (
    <Box sx={{display : "flex"  , gap : '0.5rem'}}>
        <div style={{backgroundColor : "lightgray" , height : "5rem" , width : "6rem"}}></div>
        <div style={{display :'flex ' , justifyContent :"center"  , alignItems : 'center' }}> <button style={{backgroundColor : "#B70042" , color :"white", cursor : "pointer"}}>Download Here</button></div>
    </Box>
  )
}

export default Download