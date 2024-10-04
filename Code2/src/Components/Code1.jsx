import React from "react";
import Button from "@mui/material/Button";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import InstagramIcon from "@mui/icons-material/Instagram";

const Code1 = () => {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<InstagramIcon></InstagramIcon>}
      >
        Insta
      </Button>

      <Button variant="text" color="primary">
        Button
      </Button>
      <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
        Button
      </Button>

      {/* <Button
        variant="contained"
        color="primary"
        startIcon={<AccountBalanceWalletIcon />}
      >
        Wallet
      </Button> */}
    </div>
  );
};

export default Code1;
