/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, CloudDownload, Create } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="work-page" className={classes.link}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <Apps className={classes.icons} /> Work
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="files/CV_AnjaKhan.pdf" target="_blank" className={classes.navLink} download>
          <CloudDownload className={classes.icons} /> CV
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://gatsbyblog-by-anjakhan.netlify.app/"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Create className={classes.icons} /> Blog
        </Button>
      </ListItem>
    </List>
  );
}
