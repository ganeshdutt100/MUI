import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";
// import { MenuItem } from "@mui/material";

const Code2 = () => {
  return (
    <div>
      <Button variant="text" color="primary">
        Button
      </Button>
      <ButtonGroup
        orientation="vertical"
        variant="text"
        color="primary"
        aria-label=""
      >
        <Button>btn1</Button>
        <Button>btn2</Button>
      </ButtonGroup>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography>Lorem, ipsum.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          exercitationem perferendis quam voluptate a, saepe beatae fugit unde
          iure qui earum, ad doloribus itaque eligendi quas ipsum culpa placeat
          quasi.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography>Lorem, ipsum.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          exercitationem perferendis quam voluptate a, saepe beatae fugit unde
          iure qui earum, ad doloribus itaque eligendi quas ipsum culpa placeat
          quasi.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography>Lorem, ipsum.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          exercitationem perferendis quam voluptate a, saepe beatae fugit unde
          iure qui earum, ad doloribus itaque eligendi quas ipsum culpa placeat
          quasi.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-label="Expand"
          aria-controls="-content"
          id="-header"
        >
          <Typography>Lorem, ipsum.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          exercitationem perferendis quam voluptate a, saepe beatae fugit unde
          iure qui earum, ad doloribus itaque eligendi quas ipsum culpa placeat
          quasi.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Code2;
