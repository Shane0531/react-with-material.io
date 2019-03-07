import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewHeaderLinks from "../../components/Header/NewHeaderLinks";
import Header from "../../components/Header/Header";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";
import PreSalesSection from "./Sections/PreSalesSection";
import MainChartSection from "./Sections/MainChartSection";
import PartnerSection from "./Sections/PartnerSection";
import TeamSection from "./Sections/TeamSection";
import ContactUsSection from "./Sections/ContactUsSection";

class MainPage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand="makeUNIVERSE"
          rightLinks={<NewHeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>BTS NEW ALBUM</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main)}>
          <div className={classes.container}>
            <PreSalesSection />
            <MainChartSection />
          </div>
        </div>

        {/* <div>
          <ProductSection />
        </div> */}

        <div className={classNames(classes.main)}>
          <PartnerSection />
          <TeamSection />
        </div>

        <div className={classNames(classes.main)}>
          <div className={classes.container}>
            <ContactUsSection />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(MainPage);
