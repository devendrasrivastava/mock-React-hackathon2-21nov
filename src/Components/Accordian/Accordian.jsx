import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color: "#42145F"}}><h5> Call Us </h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#42145F"}}>
           <h4><strong>Personal Banking</strong> 1800 270 1818 </h4> 
           <h4><strong>Business Banking</strong> 1800 270 1919 </h4> 
           <h4><strong>Loan</strong> 1800 270 2020 </h4> 
           <h4><strong>Mortgage</strong> 1800 270 2121 </h4> 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{color: "#42145F"}}><h5> Email Us </h5></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color: "#42145F"}}>
         <p><strong> Agile Markets </strong>- support@natwestmarkets.com</p>
<p><strong> Brexit Information</strong> - clientaccountmanagement@natwestmarkets.com</p>
<p><strong> Dodd Frank (DF) Protocol </strong>- dfprotocol@natwestmarkets.com</p>
<p><strong> European Market Infrastructure Regulation (EMIR) Regulation</strong> - emirregulation@natwestmarkets.com</p>
<p><strong> FXmicropay</strong>- fxmicropaysales@natwestmarkets.com</p>
<p> <strong>General Data Protection Regulation (GDPR)</strong>- SARS@natwestmarkets.com</p>
<p><strong> MiFID 2</strong>- mifid2@natwestmarkets.com</p>
<p><strong> MicroRates</strong>- MicroRates@natwestmarkets.com</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography style={{color: "#42145F"}}><h5> Chat with us</h5></Typography>
        </AccordionSummary>
        <Typography style={{color: "#42145F"}}>
          <h4> Our Chat Sevice will contact you shortly.</h4>
          </Typography>
      </Accordion>
    </div>
  );
}
