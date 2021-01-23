import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import SkillsIcon from "components/Skills/SkillsIcons.js";

import styles from "assets/jss/material-kit-react/components/skillsContainer.js";

const useStyles = makeStyles(styles);

export default function WorkContainer() {
  const classes = useStyles();
  return (
    <GridContainer justify="center" >
      <GridItem xs={12} sm={12} md={8}>
        HTML5
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <CustomLinearProgress
          variant="determinate"
          color="primary"
          value={90}
          style={{ width: "100%", display: "inline-block" }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        CSS3
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <CustomLinearProgress
          variant="determinate"
          color="info"
          value={90}
          style={{ width: "100%", display: "inline-block" }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        JavaScript
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <CustomLinearProgress
          variant="determinate"
          color="success"
          value={80}
          style={{ width: "100%", display: "inline-block" }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        React
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <CustomLinearProgress
          variant="determinate"
          color="warning"
          value={60}
          style={{ width: "100%", display: "inline-block" }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        Python
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <CustomLinearProgress
          variant="determinate"
          color="danger"
          value={60}
          style={{ width: "100%", display: "inline-block" }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        SQL
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <CustomLinearProgress
          variant="determinate"
          color="rose"
          value={80}
          style={{ width: "100%", display: "inline-block" }}
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <h3 className={classes.title}>Further Skills</h3>
        <SkillsIcon />
      </GridItem>
    </GridContainer>
  )
}
