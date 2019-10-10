import * as React from "react";
import { Button } from "@material-ui/core";
import { useNavLocationState, useNavLocationDispatch } from "./useNavLocation";

export default function SomeView() {
  const { navLocation } = useNavLocationState();
  const updateNavLocation = useNavLocationDispatch();
  const handleClick = (location: "map" | "home") => () => {
    updateNavLocation({ type: "nextLocation", nextLocation: location });
  };

  return (
    <>
      <Button
        disabled={navLocation === "home"}
        onClick={handleClick("home")}
        variant="contained"
        color="secondary"
      >
        Navigate Home
      </Button>
      <Button
        disabled={navLocation === "map"}
        onClick={handleClick("map")}
        variant="contained"
        color="primary"
      >
        Navigate to Map
      </Button>
    </>
  );
}
