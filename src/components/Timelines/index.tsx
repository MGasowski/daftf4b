import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Typography } from "@mui/material";

export default function ExperienceTimeline(props: any) {
  return (
    <div>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        {props.title}
      </Typography>
      <Timeline position={props.position ? props.position : ""}>
        {props.items.map((item: any, index: number) => (
          <TimelineItem key={item.name}>
            <TimelineOppositeContent color="text.secondary">
              {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              {index === props.items.length - 1 ? (
                <TimelineDot color="primary" />
              ) : (
                <>
                  <TimelineDot color="success" />
                  <TimelineConnector />
                </>
              )}
            </TimelineSeparator>
            <TimelineContent>
              {item.name}
              <Typography variant="subtitle2">{item.type}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
