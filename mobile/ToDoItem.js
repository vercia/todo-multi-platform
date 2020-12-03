import React, { useContext } from 'react';
import { Button, List, Checkbox } from 'react-native-paper';
import TabIcon from './TabIcon';
import { AppContext } from './context';

export default function ToDoItem({ item }) {
  const { switchMode, removeTask, checkDone } = useContext(AppContext);

  return (
    <List.Item
      title={item.text}
      titleStyle={{
        color: !switchMode ? 'black' : 'white'
      }}
      left={() => (
        <Checkbox.Android
          status={item.isDone}
          onPress={() => checkDone(item.key)}
        />
      )}
      right={() => (
        <Button onPress={() => removeTask(item.key)}>
          <TabIcon name={'delete'} color={!switchMode ? 'black' : 'white'} />
        </Button>
      )}
    />
  );
}
