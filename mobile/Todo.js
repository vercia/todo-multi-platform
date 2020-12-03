import React from "react";
import { List, Checkbox } from "react-native-paper";
import TabIcon from "./TabIcon";

const Todo = () => {
  return (
    <List.Item
      title="Todo"
      left={() => <Checkbox.Android status={"checked"} />}
      right={() => <TabIcon name={"delete"} color={"black"} />}
    />
  );
};

export default Todo;
