import React from "react";
import {
  Button,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@mui/material";

function Code2() {
  return (
    <div>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My MUI App</Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Material-UI
        </Typography>

        {/* Text Field */}
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        />

        {/* Button */}
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </Container>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "green",
          "&:hover": { backgroundColor: "darkgreen" },
        }}
      >
        Custom Button
      </Button>
    </div>
  );
}

export default Code2;
