import React, { useContext } from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import TabIcon from './TabIcon';
import { AppContext } from './context';
import { t } from './Language/services/i18n';
import AgendaCalendar from './AgendaCalendar';

const CalendarScreen = () => {
  const { switchMode } = useContext(AppContext);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: 500,
        backgroundColor: !switchMode ? 'white' : '#353535'
      }}
    >
      <Text style={[styles.text, { color: !switchMode ? 'black' : 'white' }]}>
        {t('Calendar:calendar')}
      </Text>
      <AgendaCalendar />
    </SafeAreaView>
  );
};

CalendarScreen.navigationOptions = {
  tabBarIcon: <TabIcon name={'calendar'} />
};

const styles = StyleSheet.create({
  calendar: {
    paddingTop: 15
  },
  text: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 18
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default CalendarScreen;
