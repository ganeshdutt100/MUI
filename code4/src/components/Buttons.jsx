import React, { useState } from "react";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Typography from '@mui/material/Typography';
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";

const WallPaper = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&::before": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    top: "-40%",
    right: "-50%",
    background:
      "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)",
  },
  "&::after": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    bottom: "-50%",
    left: "-30%",
    background:
      "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",
    transform: "rotate(30deg)",
  },
});

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: "100%",
  margin: "auto",
  position: "relative",
  zIndex: 1,
  backgroundColor: "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(0,0,0,0.6)",
  }),
}));

const CoverImage = styled("div")({
  width: 100,
  height: 100,
  objectFit: "cover",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const Buttons = () => {
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const [color, setColor] = useState("primary");
  const [list, setList] = useState(false);

  const handleDisplay = () => {
    setList(!list);
  };

  const handleClick = () => {
    if (color === "primary") {
      setColor("secondary");
    } else {
      setColor("primary");
    }
  };
  return (
    <div>
      <Button variant="contained" color={color} onClick={handleClick}>
        ButtonMaterial
      </Button>
      <Button
        sx={{ ml: "12px" }}
        variant="contained"
        color="error"
        onClick={handleDisplay}
      >
        {list ? "show" : "hidden"}
      </Button>
      {list ? (
        " "
      ) : (
        <List
          sx={{
            mt: "5px",
            width: "100%",
            maxWidth: 360,
            backdropFilter: "blur(10px)",
            background: "rbg(222,453,233,.6)",
            // opacity: ".5",
            display: { list },
            // position: "absolute",
            zIndex: "10000",
          }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      )}

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        officiis praesentium voluptatem reiciendis commodi optio, corporis
        libero magnam est esse, dignissimos vitae, aut ut ducimus fugit dolor
        enim nemo tenetur!
      </p>

      {/* <Box
        sx={{ width: "100%", overflow: "hidden", position: "relative", p: 3 }}
      >
        <Widget>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CoverImage>
              <img
                alt="can't win - Chilling Sunday"
                src="/static/images/sliders/chilling-sunday.jpg"
              />
            </CoverImage>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", fontWeight: 500 }}
              >
                Jun Pulse
              </Typography>
              <Typography noWrap>
                <b>คนเก่าเขาทำไว้ดี (Can&apos;t win)</b>
              </Typography>
              <Typography noWrap sx={{ letterSpacing: -0.25 }}>
                Chilling Sunday &mdash; คนเก่าเขาทำไว้ดี
              </Typography>
            </Box>
          </Box>
          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={(t) => ({
              color: "rgba(0,0,0,0.87)",
              height: 4,
              "& .MuiSlider-thumb": {
                width: 8,
                height: 8,
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&::before": {
                  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 8px ${"rgb(0 0 0 / 16%)"}`,
                  ...t.applyStyles("dark", {
                    boxShadow: `0px 0px 0px 8px ${"rgb(255 255 255 / 16%)"}`,
                  }),
                },
                "&.Mui-active": {
                  width: 20,
                  height: 20,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.28,
              },
              ...t.applyStyles("dark", {
                color: "#fff",
              }),
            })}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: -2,
            }}
          >
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>-{formatDuration(duration - position)}</TinyText>
          </Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: -1,
              "& svg": {
                color: "#000",
                ...theme.applyStyles("dark", {
                  color: "#fff",
                }),
              },
            })}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" />
            </IconButton>
            <IconButton
              aria-label={paused ? "play" : "pause"}
              onClick={() => setPaused(!paused)}
            >
              {paused ? (
                <PlayArrowRounded sx={{ fontSize: "3rem" }} />
              ) : (
                <PauseRounded sx={{ fontSize: "3rem" }} />
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" />
            </IconButton>
          </Box>
          <Stack
            spacing={2}
            direction="row"
            sx={(theme) => ({
              mb: 1,
              px: 1,
              "& > svg": {
                color: "rgba(0,0,0,0.4)",
                ...theme.applyStyles("dark", {
                  color: "rgba(255,255,255,0.4)",
                }),
              },
            })}
            alignItems="center"
          >
            <VolumeDownRounded />
            <Slider
              aria-label="Volume"
              defaultValue={30}
              sx={(t) => ({
                color: "rgba(0,0,0,0.87)",
                "& .MuiSlider-track": {
                  border: "none",
                },
                "& .MuiSlider-thumb": {
                  width: 24,
                  height: 24,
                  backgroundColor: "#fff",
                  "&::before": {
                    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    boxShadow: "none",
                  },
                },
                ...t.applyStyles("dark", {
                  color: "#fff",
                }),
              })}
            />
            <VolumeUpRounded />
          </Stack>
        </Widget>
        <WallPaper />
      </Box> */}
    </div>
  );
};

export default Buttons;
