import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) =>
 ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
})
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CommonAccordion({ title, children }) {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ padding: "1rem" }}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {
                        children}
                </AccordionDetails>
            </Accordion>
            {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
        </div>
    );
}




// const CommonAccordion = ({title , children , defaultExpanded }) => {

//     return (
//         <div>
//             <Accordion  defaultExpanded={defaultExpanded} sx={{ padding: "1rem" }}>


//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1-content"
//                     id="panel1-header"
//                     sx={{ color: "black", backgroundColor: "lightgray", borderRadius: '10px', fontSize: "1.2rem", }}
//                 >
//                     {title}
//                 </AccordionSummary>
//                 <AccordionDetails sx={{ paddingTop: '1rem', paddingBottom: "1rem" }}>
//                     {
//                         children
//                     }
//                     {/* <Grid container spacing={1}>
//                         <Grid item container spacing={1}>
//                             {Data.Data1.map(item => {
//                                 return (<Grid xs={12} md={item.screen} item>
//                                     <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
//                                         <label className='label'>{item.label}</label>
//                                         <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
//                                     </div>

//                                 </Grid>)
//                             })}



//                         </Grid>
//                         <Grid item container spacing={1}>
//                             <Grid xs={12} md={4} item>
//                                 <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
//                                     <label className="label">DOB</label>
//                                     <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
//                                 </div>
//                             </Grid>
//                             <Grid xs={12} md={4} item> <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
//                                 <label className="label">Gender</label>
//                                 <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
//                             </div></Grid>
//                             <Grid xs={12} md={4} item > <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
//                                 <label className="label">Martial Status</label>
//                                 <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
//                             </div></Grid>


//                         </Grid>
//                         <Grid item container spacing={1}>
//                             <Grid xs={12} md={4} item>
//                                 <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
//                                     <label className="label">Civil ID Number</label>
//                                     <input style={{ backgroundColor: "lightgray", border: "none", borderRadius: '8px', height: "2rem" }} />
//                                 </div>
//                             </Grid>



//                         </Grid>
//                     </Grid> */}
//                 </AccordionDetails>
//             </Accordion>


//         </div>
//     )
// }
CommonAccordion.defaultProps = {
    title: "",
    defaultExpanded: false,

}

// export default CommonAccordion