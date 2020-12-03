import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabIcon = props => {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={24}
      color={props.color || "white"}
    />
  );
};

export default TabIcon;
