import { container, warningColor } from "assets/jss/material-kit-react.js";

const footerStyle = {
  block: {
    color: warningColor,
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    "&:hover,&:focus": {
      color: warningColor
    }
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    color: "#FFFFFF",
    padding: "15px 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    padding: "0.9375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: warningColor,
    textDecoration: "none",
    backgroundColor: "transparent",
    "&:hover,&:focus": {
      color: warningColor
    }
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  icon: {
    width: "18px",
    height: "18px",
    position: "relative",
    top: "3px"
  }
};
export default footerStyle;