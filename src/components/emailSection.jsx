import { Box, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import colorPalette from "../utils/colorPalette";
import TextField from "@mui/material/TextField";

function EmailSection() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <Box sx={{ width: "100%", background: colorPalette.penSecondary }}>
        <Box
          sx={{
            background: colorPalette.penLightBlue,
            textAlign: "center",
            padding: 1,
          }}
        >
          <Typography variant="h6">Run A Free Scan</Typography>
        </Box>
        <Box
          sx={{
            background: "white",
            minHeight: "30vh",
            padding: 4,
            borderRadius: 5,
          }}
        >
          <Typography variant="h6">Email Address:</Typography>
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="ex. johndoe@email.com"
            variant="standard"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <Box className="horizontalCenter" mt={5}>
            <button
              style={{
                padding: "20px",
                width: "50%",
                display: "flex",
                justifyContent: "center",
              }}
              className="yellowButton"
            >
              Start Scan
            </button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: colorPalette.penSecondary,
          padding: 4,
        }}
      >
        <Typography variant="p">
          Your email will be tested against attacks such us Phishing, Whailing,
          Pharming and Spam. Once the attack campaign is done, you will receive
          an email with the results.
        </Typography>
      </Box>
    </div>
  );
}

export default EmailSection;
