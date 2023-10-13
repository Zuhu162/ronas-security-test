import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import colorPalette from "../utils/colorPalette";
import EmailSection from "./emailSection";

const Hero = () => {
  return (
    <div className="verticalCenter">
      <Grid container spacing={3} mt={3} mb={3}>
        <Grid item xs={12} lg={6} xl={6}>
          <Paper
            sx={{
              background: colorPalette.penGray,
              color: "white",
              padding: 4,
              borderRadius: "20px",
            }}
          >
            <Typography variant="h2" mb={4}>
              Email <br /> Security <br /> Explorer
            </Typography>
            <Typography variant="h5">
              Over a billion individuals use email on a daily basis across the
              world. Email has grown to be one of the most vulnerable services,
              both for users and for businesses.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6} xl={6}>
          <EmailSection></EmailSection>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
