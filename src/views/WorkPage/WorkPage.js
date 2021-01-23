import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import WorkContainer from "components/Work/WorkContainer.js";

import profile from "assets/img/anjakhan.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function WorkPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        brand="Fullstack Web Developer"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/sunset-river.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <Link to="/" className={classes.link}>
                      <h3 className={classes.title}>Anja Khan</h3>
                    </Link>
                    <h6>FULLSTACK WEB DEVELOPER</h6>
                    <Button justIcon link className={classes.margin5}>
                    <a
                      href="https://twitter.com/anja_khan90"
                      className={classes.block}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{color: "#1DA1F2"}}
                    >
                      <i className={"fab fa-twitter"} />
                    </a>
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <a
                        href="https://github.com/anjakhan"
                        className={classes.block}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "#333"}}
                      >
                        <i className={"fab fa-github"} />
                      </a>
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <a
                        href="https://www.linkedin.com/in/anja-khan/"
                        className={classes.block}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{color: "#4078c0"}}
                      >
                        <i className={"fab fa-linkedin"} />
                      </a>
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
              <div className={classes.description}>
                <p style={{textAlign: "center"}}>
                  Following a small selection of my Web Development work is represented. <br />
                  More projects can be found on my Blog as well as on my GitHub Profile. {" "}
                </p>
              </div>
            <WorkContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
