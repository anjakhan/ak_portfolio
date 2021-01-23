import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { Code, Computer } from "@material-ui/icons";
// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function LinkButton({ href, type }) {
  const classes = useStyles();
  return (
    <a 
        href={href}
        className={classes.block}
        target="_blank"
        rel="noopener noreferrer"
    >
        <Button
            color="success"
            target="_blank"
            className={classes.navLink}
            style={{margin: "20px 5px"}}
        >
            {type==="Demo" ? <Computer className={classes.icons} /> : <Code className={classes.icons} />} {type}
        </Button>
    </a>
  )
}