import image from "../images/img.png";
import { Box, Rating, Typography } from "@mui/material";

const Testimonial = ({ reviewer }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      margin: "1rem 4rem",
    }}
  >
    <center>
      <img src={image} alt="images" />
      <Rating
        name="read-only"
        value={4.5}
        readOnly
        precision={0.5}
        sx={{
          color: "#B8D344",
          marginTop: "3rem",
        }}
      />
      <Typography
        variant="p"
        component="p"
        sx={{
          color: "#6a6a6a",
          fontFamily: "Poppins",
          fontSize: "1rem",
          lineHeight: "25.6px",
          maxWidth: "300px",
          margin: "1rem auto",
        }}
      >
        {" "}
        It is a long established fact that a reader will be distracted by the
        readable content of a page
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontFamily: "Oleo Script",
          color: "#1c1c1c",
          fontweight: "400px",
        }}
      >
        {" "}
        {reviewer}
      </Typography>
    </center>
  </Box>
);

export default Testimonial;
