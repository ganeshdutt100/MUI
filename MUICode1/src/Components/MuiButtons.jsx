import React from "react";
import { Stack, Button, Box, Typography } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

import InstagramIcon from "@mui/icons-material/Instagram";
const MuiButtons = () => {
  return (
    <div>
      <Stack spacing={6} direction="row">
        <Button
          variant="text"
          href="https://ganeshdutt.netlify.app"
          target="_blanck"
        >
          TEXT
        </Button>
        <Button variant="contained" color="primary">
          Button
        </Button>
        <Button variant="outlined">btn</Button>
      </Stack>

      <Stack mt={2} spacing={2} direction="row">
        <Button variant="contained" color="error" sx={{ ml: 2 }}>
          error
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="secondary">
          error
        </Button>
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
      </Stack>

      <Box sx={{ m: 2, p: 2 }}>
        Content inside a Box with margin and padding
      </Box>

      <Typography sx={{ ml: 20 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cupiditate
        harum praesentium perferendis impedit, alias sapiente repellendus eius
        excepturi laudantium animi, placeat soluta atque! Consectetur iste
        molestiae necessitatibus mollitia sint.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        startIcon={<SendIcon></SendIcon>}
      >
        Send
      </Button>

      <Button variant="contained" color="warning" sx={{ ml: 2 }}>
        kriti
      </Button>

      <Button
        variant="contained"
        color="secondary"
        startIcon={<InstagramIcon></InstagramIcon>}
      >
        Insta
      </Button>
    </div>
  );
};

export default MuiButtons;
