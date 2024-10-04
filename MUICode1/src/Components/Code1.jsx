import React from "react";
import { Typography } from "@mui/material";

const Code1 = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">h6 Heading</Typography>
      <Typography variant="subtitle2">h6 Heading</Typography>

      <Typography variant="body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eveniet?
        Sed laboriosam quasi at facilis alias, ipsam corporis quos harum maxime
        nesciunt iusto modi doloribus fuga eum facere fugit impedit?
      </Typography>

      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, eveniet?
        Sed laboriosam quasi at facilis alias, ipsam corporis quos harum maxime
        nesciunt iusto modi doloribus fuga eum facere fugit impedit?
      </Typography>
    </div>
  );
};

export default Code1;
