import React, { useState, useContext, useEffect } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { AppContext } from './context';

const AgendaCalendar = () => {
  const [items, setItems] = useState({});
  const { todos } = useContext(AppContext);

    useEffect(() => {
        setItems()
    }, []);

  loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        items[strTime] = [];
        for (var j = 0; j < todos.length; j++) {
          if (todos[j].date === strTime) {
            items[strTime].push({
              name: todos[j].text + ' ' + strTime,
              height: 100
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 10);
  };

  renderItem = (item) => {
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  return (
    <Agenda
      items={items}
      loadItemsForMonth={loadItems.bind()}
      renderItem={renderItem.bind()}
      renderEmptyDate={renderEmptyDate.bind()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

export default AgendaCalendar;
