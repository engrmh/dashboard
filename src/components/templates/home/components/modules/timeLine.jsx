import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import { orderActivityCard1 } from "../../data/data";
import { Stack } from "@mui/material";

export default function TimeLine() {
  return (
    <div>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {orderActivityCard1.map((item, i, array) => (
          <TimelineItem key={i}>
            <TimelineSeparator>
              <TimelineDot
                style={{
                  backgroundColor: item.color,
                  padding: ".5rem",
                }}
              >
                {item.icon}
              </TimelineDot>
              {i !== array.length - 1 && (
                <TimelineConnector
                  style={{
                    backgroundColor: "#a9a9a9",
                    height: "2rem",
                  }}
                />
              )}
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" component="span" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography
                  variant="h6"
                  fontSize=".9rem"
                  color="#a9a9a9"
                  fontWeight="bold"
                >
                  {item.time}
                </Typography>
              </div>
              <Typography fontSize=".8rem">{item.desc}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
