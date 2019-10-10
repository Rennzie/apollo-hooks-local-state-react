import * as React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Typography,
  Divider,
  ListItem,
  List,
  ListItemText
} from "@material-ui/core";

import { useNavLocationState, useNavLocationDispatch } from "./useNavLocation";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    aside: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: theme.palette.secondary.light
    },
    content: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      flexGrow: 1,
      height: "100vh",
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(3)
    }
  })
);

type Props = {
  children: React.ReactNode;
};

export default function AppShell({ children }: Props) {
  const classes = useStyles({});
  const { navLocation } = useNavLocationState();
  const updateNavLocation = useNavLocationDispatch();

  const handleChange = (location: "map" | "home") => () => {
    updateNavLocation({ type: "nextLocation", nextLocation: location });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* -----------------------------------------
                       NAVIGATION PANEL      
          ---------------------------------------- */}
      <aside className={classes.aside}>
        <Typography align="center" variant="h2" noWrap color="primary">
          {navLocation}
        </Typography>
        <Divider />
        <List>
          <ListItem
            selected={navLocation === "home"}
            button
            onClick={handleChange("home")}
          >
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            selected={navLocation === "map"}
            button
            onClick={handleChange("map")}
          >
            <ListItemText primary="Map" />
          </ListItem>
        </List>
      </aside>

      {/* -----------------------------------------
                        PAGES    
          ---------------------------------------- */}
      <main className={classes.content}>{children}</main>
    </div>
  );
}
