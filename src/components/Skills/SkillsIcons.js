import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

import icons from "./IconsList.js";
import styles from "assets/jss/material-kit-react/components/skillsContainer.js";

const useStyles = makeStyles(styles);

export default function SkillsIcon() {
  const classes = useStyles();
  return (
    <h1 className={classes.iconContainer}>
      {icons.map((icon, idx) => {
        const Icon = icon.symbol;
        return (
          <Tooltip
            key={idx}
            id={icon.id}
            title={icon.title}
            placement="top"
          >
            <span className={classes.iconItem} style={{color: icon.color}}><Icon /></span>
          </Tooltip>
        )
      })}
    </h1>
  )
}
