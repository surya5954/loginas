import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const usestyle = makeStyles((theme) => ({
  welcomeText: {
    "& .makeStyles-paper-3": {
      margin: "40px 0 0 0",
    },
  },
  tagline: {
    margin: "0 0 10px 0",
  },
}));

export default function HeaderNlogo() {
  const classes = usestyle();
  return (
    <div>
      <Typography
        // className={classes.welcomeText}
        component="h1"
        variant="subtitle2"
      >
        WELCOME TO
      </Typography>

      <Typography component="h2" variant="h4" style={{ color: "tomato" }}>
        maidIN
      </Typography>

      <Typography
        className={classes.tagline}
        component="h3"
        variant="subtitle2"
      >
        login to get maid around your location
      </Typography>
    </div>
  );
}
