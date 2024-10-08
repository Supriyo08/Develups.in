import React from "react";
import "./about.css";
import box1 from "../../assets/jonasleeo6eltkwz5biunsplash-1-1@2x.png";
import box2 from "../../assets/jonasleeo6eltkwz5biunsplash-1-2@2x.png";
import box3 from "../../assets/jonasleeo6eltkwz5biunsplash-1-6@2x.png";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "./carousal.css";

const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1150 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1150, min: 860 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 860, min: 550 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="about" id="about">
      <div className="about-container container">
        <div className="about-data">
          <h2>Select Your Passion!</h2>
          <p>
            Select your passion and elevate your sporting journey by choosing
            your favorite game from our diverse list of options on SportOn.
          </p>
        </div>
        <div className="about-box-data">
          {/* <i className="icon-left">
            <box-icon name="chevron-left"></box-icon>
          </i> */}
          <div className="about-box">
            <Carousel responsive={responsive} infinite={true}>
              <div className="home-box1 boxi">
                <img src={box2} alt="" />
                <h3>Football</h3>
                <p>
                  ####
                </p>
              </div>

              <div className="home-box1 boxi">
                <img src={box3} alt="" />
                <h3>Basketball</h3>
                <p>
                 #####
                </p>
              </div>

              <div className="home-box1 boxi">
                <img src={box1} alt="" />
                <h3>Volleyball</h3>
                <p>
       #####
                </p>
              </div>

              <div className="home-box1 boxi">
                <img src={box1} alt="" />
                <h3>Badminton</h3>
                <p>
               #####
                </p>
              </div>
            </Carousel>
          </div>
          {/* <i className="icon-right">
            <box-icon name="chevron-right"></box-icon>
          </i> */}
        </div>
      </div>
    </div>
  );
};

export default About;
