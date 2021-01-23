import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { Eco, MenuBook, ShoppingCart } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import CarouselContainer from "components/Carousel/CarouselContainer.js";
import LinkButton from "components/Work/LinkButton.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import { 
    image1, image2, image3, image4, image5, image11, image12, image13, image14, image21, image22, image23, image24, image25 
} from "assets/img/index.js";

const useStyles = makeStyles(styles);

export default function WorkContainer() {
  const classes = useStyles();
  return (
  <GridContainer justify="center">
    <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
    <NavPills
        alignCenter
        color="warning"
        tabs={[
        {
            tabButton: "Green Design",
            tabIcon: Eco,
            tabContent: (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <CarouselContainer images={[image1, image5, image2, image3, image4]}/>
                    <div className={classes.description}>
                        <p>
                            Within the scope of the local Agenda21 in Petershagen / Eggersdorf (east of Brandenburg) an evaluation of suitable trees was done by the company IBE / ÖKO-DATA. 
                            As an employee responsible for ArcGIS and Database tasks I was asked to make an interactive map accessible for any citizen of Petershagen / Eggersdorf. 
                            I utilized HTML, CSS, JavaScript and Leaflet to put up the website as well as ArcGIS to create the map. 
                            As a result the citizens are now able to locate themselves or look up any other position on the map within the survey area and find out the best suitable trees and further site-specific information. 
                            A table including tree-specific details is also provided. {" "}
                        </p>
                    </div>
                    <LinkButton href="https://ibe-gmbh.github.io/petershagen-eggersdorf/" type="Demo" />
                </GridItem>
            </GridContainer>
            )
        },
        {
            tabButton: "Cooking",
            tabIcon: MenuBook,
            tabContent: (
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <CarouselContainer images={[image11, image12, image13, image14]}/>
                    <div className={classes.description}>
                        <p>
                            The Recipe App I build based on the skills gained in "The Modern JavaScript Bootcamp" course by Andrew Mead. 
                            The App was written with the languages HTML5, CSS3 and JavaScript. Additional tools used are Local Storage, Webpack and Babel. 
                            The final result of the project enables users to write and save recipes locally on their devices, sort these by the criterias 
                            "last edited", "recently created" and "alphabetically" and to have an approximate overview of available ingredients. 
                            Also a search box is included to filter the recipes by their title. 
                            Recipes can be edited, individually deleted or all together removed with the "Remove All Recipes" button in the Danger Zone. {" "}
                        </p>
                    </div>
                    <LinkButton href="https://github.com/anjakhan/RecipeApp" type="Code" />
                    <LinkButton href="https://anjakhan.github.io/RecipeApp/" type="Demo" />
                </GridItem>
            </GridContainer>
            )
        },
        {
            tabButton: "E-Commerce",
            tabIcon: ShoppingCart,
            tabContent: (
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                    <CarouselContainer images={[image21, image22, image23, image24, image25]}/>
                    <div className={classes.description}>
                        <p>
                            The CRWN-Clothing Shop is a full stack app (MERN stack) that I completed as part of the "Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL)" course by Andrei Neagoie. 
                            Throughout the course I built this e-commerce application using React, Redux, React Hooks, React Suspense, React Router, Firebase, Redux-Saga, Stripe and more. 
                            Users can sign up for a great shopping experience, shop through a variety of clothes, update their shopping cart, overlook their selected items in the shopping cart and buy their selection via Stripe Payment. 
                            The users and store items are stored in Firebase, whereas the user based selection is saved in the local storage. 
                            For signed in users the selection is also kept in Firebase. {" "}
                        </p>
                    </div>
                    <LinkButton href="https://github.com/anjakhan/crwn-clothing" type="Code" />
                    <LinkButton href="https://crwn-economy.herokuapp.com/" type="Demo" />
                </GridItem>
            </GridContainer>
            )
        }
        ]}
    />
    </GridItem>
</GridContainer>
  )
}