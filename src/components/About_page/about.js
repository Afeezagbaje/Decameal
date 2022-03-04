import React from "react";
import "./about.css";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import picture from "../../assets/knife.png";
import image from "../../assets/humanlike.png";
import bannerImage from "../../assets/about.png";
import chef1 from "../../assets/chef1woman.png";
import chef2 from "../../assets/firstman.png";
import chef3 from "../../assets/chef2woman.png";
import chef4 from "../../assets/secondman.png";

const AboutPage = () => {
  return (
    <>
      <Box
        md={{
          height: 912,
        }}
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "rgba(52, 168, 83, 0.21)",
          backgroundPosition: "center",
        }}
      >
        <Box
          style={{
            paddingTop: 276,
            paddingLeft: 98,
            color: "#fff",
          }}
        >
          <Box
            className="about-page-title"
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: 96,
            }}
          >
            <span className="We">We</span> serve you <br /> Healthy meals
          </Box>
          <Box
            style={{
              width: "730px",
              height: "104px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 24,
              lineHeight: "120%",
              color: "#FFFFFF",
            }}
          >
            We promise you will enjoy and find your favorite meals, eat what you
            want and save your precious time
          </Box>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#34A853",
              height: "53px",
              maxWidth: "185px",
              marginTop: "25px",
              borderRadius: "7px",
              marginBottom: "238px",
            }}
            className="submit_button"
          >
            <span className="button-text">Explore Meals</span>
          </Button>
        </Box>
      </Box>
      <Box
        style={{
          backgroundColor: "#8EA739",
        }}
      >
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <Box
                style={{
                  height: "270px",
                  position: "relative",
                  width: "361px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "-50%",
                    transform: "translate(-50%, 100%)",
                  }}
                >
                  <img src={image} alt="mm" />
                </Box>
              </Box>

              <Typography
                style={{
                  color: "rgb(255, 255, 255)",
                  position: "relative",
                  display: "flex",
                  marginLeft: "30px",
                  top: "80px",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                service of Qualified chef
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                paddingLeft: "215px",
              }}
              sm={{
                paddingLeft: 0,
              }}
            >
              <Box
                style={{
                  height: "270px",
                  position: "relative",
                  width: "361px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "-70%",
                    transform: "translate(-50%, 100%)",
                  }}
                >
                  <img src={picture} alt="mm" />
                </Box>
              </Box>
              <Box>
                <Typography
                  style={{
                    color: "rgb(255, 255, 255)",
                    position: "relative",
                    display: "flex",
                    marginLeft: "100px",
                    top: "80px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Quality service
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Container>
        <Typography
          style={{
            color: "rgb(255, 255, 255)",
            position: "relative",
            left: "416px",
            fontSize: "340%",
            top: "150px",
            fontWeight: "bold",
          }}
        >
          Meet our Chefs
        </Typography>
        <Container>
          <Grid
            container
            spacing={6}
            style={{
              marginTop: "25em",
            }}
          >
            <Grid item xs={6}>
              <Box
                style={{
                  backgroundColor: "#fff",
                  height: "290px",
                  position: "relative",
                  width: "361px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    width: "272px",
                    height: "216px",
                    background: "#40C745",
                    left: "50%",
                    top: "-100%",
                    transform: "translate(-50%, 100%)",
                  }}
                >
                  <img src={chef1} alt="mm" className="chef-image" />
                </Box>
                <Box>
                  <Typography>
                    <p
                      style={{
                        position: "relative",
                        marginLeft: "22px",
                        marginRight: "20px",
                        width: "100%",
                        fontSize: "15px",
                        paddingBottom: "42px",
                      }}
                    >
                      Sarah Johnson
                      <br /> Sarah is a great cook.
                      <br /> she is able to prepare every meal to its
                      <br /> rhythme
                    </p>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                paddingLeft: "215px",
              }}
            >
              <Box
                style={{
                  backgroundColor: "#fff",
                  height: "287px",
                  position: "relative",
                  width: "361px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    width: "272px",
                    height: "216px",
                    background: "#40C745",
                    left: "50%",
                    top: "-100%",
                    transform: "translate(-50%, 100%)",
                  }}
                >
                  <img src={chef2} alt="mm" className="chef2-image" />
                </Box>
                <Box>
                  <Typography
                    style={{
                      position: "relative",
                      marginLeft: "22px",
                      marginRight: "20px",
                      width: "100%",
                      fontSize: "15px",
                      paddingBottom: "42px",
                    }}
                  >
                    Mike Law
                    <br /> Mike is one of the best
                    <br /> chefs and the dishes he prepares are top
                    <br /> notch
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Container>
        <Container>
          <Grid
            container
            spacing={6}
            style={{
              marginTop: "20em",
            }}
          >
            <Grid item xs={6}>
              <Box
                style={{
                  backgroundColor: "#fff",
                  height: "280px",
                  position: "relative",
                  width: "361px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    width: "272px",
                    height: "216px",
                    background: "#40C745",
                    left: "50%",
                    top: "-100%",
                    transform: "translate(-50%, 100%)",
                  }}
                >
                  <img src={chef4} alt="mm" className="chef3-image" />
                </Box>
                <Box>
                  <Typography
                    style={{
                      position: "relative",
                      marginLeft: "22px",
                      marginRight: "20px",
                      width: "100%",
                      fontSize: "15px",
                      top: "15px",
                      paddingBottom: "44px",
                    }}
                  >
                    Brad Hakimi
                    <br /> Brad is a great cook. He is able to prepare
                    <br />
                    every meal to its rhythm and prepare it
                    <br /> for custermers himself
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                paddingLeft: "215px",
              }}
            >
              <Box
                style={{
                  backgroundColor: "#fff",
                  height: "280px",
                  position: "relative",
                  width: "361px",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <Box
                  style={{
                    position: "absolute",
                    width: "272px",
                    height: "216px",
                    background: "#40C745",
                    left: "50%",
                    top: "-100%",
                    transform: "translate(-50%, 100%)",
                  }}
                >
                  <img src={chef3} alt="mm" className="chef4-image" />
                </Box>
                <Box>
                  <Typography
                    style={{
                      position: "relative",
                      marginLeft: "15px",
                      marginRight: "18px",
                      width: "100%",
                      fontSize: "15px",
                      top: "15px",
                      paddingBottom: "44px",
                    }}
                  >
                    Fiona Ghalarger
                    <br /> Brad is a great cook. He is able to prepare
                    <br />
                    every meal to its rhythm and prepare it
                    <br /> for custermers himself
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AboutPage;
