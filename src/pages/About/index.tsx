import { Grid, Typography } from "@mui/material";
import ExperienceTimeline from "../../components/Timelines";
import Slide from "@mui/material/Slide";
import Zoom from "@mui/material/Zoom";

const edu = [
  {
    name: "Polish-Japanese Academy of Information Technology",
    type: "BSc. Computer Science",
    date: "2018 - 2022",
  },
  {
    name: "Polish-Japanese Academy of Information Technology",
    type: "MSc. Computer Science",
    date: "2022 - Current",
  },
];

const pro = [
  {
    name: "Rozkminki",
    type: "Robotics and Programming Tutor",
    date: "2019/2020",
  },
  { name: "Accenture", type: "Software Developer", date: "2021 - Current" },
];

const About = () => {
  return (
    <>
      <Slide direction="down" in>
        <Typography variant="h2" sx={{ fontSize: "2em", zIndex: -1 }}>
          Hi, I'm Marcin!
        </Typography>
      </Slide>
      <Slide in direction="left">
        <hr
          style={{
            width: "50%",
          }}
        />
      </Slide>

      <Grid container spacing={2}>
        <Zoom in style={{ transitionDelay: "200ms" }}>
          <Grid item xs={12} md={6}>
            <ExperienceTimeline title={"Education"} items={edu} />
          </Grid>
        </Zoom>
        <Zoom in style={{ transitionDelay: "300ms" }}>
          <Grid item xs={12} md={6}>
            <ExperienceTimeline
              title={"Professional Experience"}
              items={pro}
              position="left"
            />
          </Grid>
        </Zoom>
      </Grid>
    </>
  );
};

export default About;
