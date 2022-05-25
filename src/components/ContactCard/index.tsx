import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Tooltip, Zoom } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import * as React from "react";

export default function ContactCard() {
  return (
    <Zoom in>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          // height="140"
          image={"/photo.jpg"}
          alt="My face"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Marcin Gąsowski
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I am software developer with strong passion in frontend. Below you
            can find my Github, Gmail and Linkedin accounts. Feel free to
            contact me!
          </Typography>
        </CardContent>
        <CardActions>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Tooltip title="GitHub">
              <Zoom in style={{ transitionDelay: "200ms" }}>
                <a
                  href="https://github.com/mgasowski"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon
                    style={{ fontSize: "4rem" }}
                    sx={{ color: "#3c3c3c" }}
                  />
                </a>
              </Zoom>
            </Tooltip>
            <Tooltip title="GMail">
              <Zoom in style={{ transitionDelay: "300ms" }}>
                <a href="mailto:gasowski0marcin@gmail.com">
                  <EmailIcon
                    style={{ fontSize: "4rem" }}
                    sx={{ color: "#3c3c3c" }}
                  />
                </a>
              </Zoom>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <Zoom in style={{ transitionDelay: "400ms" }}>
                <a
                  href="https://www.linkedin.com/in/marcin-gasowski/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon
                    style={{
                      fontSize: "4rem",
                    }}
                    sx={{ color: "#3c3c3c" }}
                  />
                </a>
              </Zoom>
            </Tooltip>
          </Box>
        </CardActions>
      </Card>
    </Zoom>
  );
}
