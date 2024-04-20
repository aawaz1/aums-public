// import { Box } from "@mui/material"
// import { useRef } from "react";

// const Download = ({formData , handleChange}) => {
//   const fileInputRef = useRef(null);

//   const handleButtonClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileUpload = (e) => {
//     const selectedFile = e.target.files[0];
//     // Handle the selected file here, such as uploading it to a server
//     console.log('Selected file:', selectedFile);
//   };
//   return (
//     <Box sx={{display : "flex"  , gap : '0.5rem'}}>
//         <div style={{backgroundColor : "lightgray" , height : "5rem" , width : "6rem"}}></div>
//         <input
//         type="file"
//         ref={fileInputRef}
//         onChange={ handleChange(e, "document , passport")}
//         value={formData.document.passport.value}
//         style={{ display: 'none' }}
//       />
//         <div style={{display :'flex ' , justifyContent :"center"  , alignItems : 'center' }}> 
        
//         <button
//         onClick={handleButtonClick}
//         style={{ backgroundColor: '#B70042', color: 'white', cursor: 'pointer' }}
//       >
//         Upload Document
//       </button>
//         </div>
           
//     </Box>
//   )
// }

// export default Download

import { Box } from "@mui/material";
import { useRef, useState } from "react";

const Download = ({ formData, handleChange , value }) => {
  const [selectedFile, setSelectedFile] = useState(null); 
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];

    const updatedFormData = {
      target: {
        value:  selectedFile
      },
    };
    handleChange(updatedFormData, "document", value);
    setSelectedFile(updatedFormData)
    // You can also perform any additional logic here, such as uploading the file to a server
    console.log('Selected file:', selectedFile);
  };

  return (
    <Box sx={{ display: "flex", gap: '0.5rem' }}>
      <div style={{ backgroundColor: "lightgray", height: "5rem", width: "6rem" }}>
      {selectedFile && (
          <img
          style={{width : "100%" , height :"100%"}}
            src='file-upload.svg' // Displaying image, use appropriate tag for other file types
            alt={selectedFile.name}
           
          />

        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />
      <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
        <button
          onClick={handleButtonClick}
          style={{ backgroundColor: '#B70042', color: 'white', cursor: 'pointer' }}
        >
          Upload Document
        </button>
      </div>
    </Box>
  )
}

export default Download;
