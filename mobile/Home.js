import React, { useContext } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { List } from 'react-native-paper';
import BackgroundImage from './BackgroundImage';
import Clock from './Clock';
import TabIcon from './TabIcon';
import AddButton from './AddButton';
import ToDoItem from './ToDoItem';
import { AppContext } from './context';
import { t } from './Language/services/i18n';
import moment from 'moment'

const HomeScreen = () => {
  const { switchMode, todos, handleSubmit } = useContext(
    AppContext
  );
  const today = moment().format('YYYY-MM-DD');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: !switchMode ? 'white' : '#353535'
      }}
    >
      <BackgroundImage fabButton={<AddButton handleSubmit={handleSubmit} />}>
        <Clock />
      </BackgroundImage>
      <ScrollView>
        <List.Section>
          <List.Subheader style={{ color: !switchMode ? 'black' : 'white' }}>
            {t('Home:listTask')}
          </List.Subheader>
          <FlatList
            data={todos}
            renderItem={({ item }) =>( 
            item.date === today ? 
              <ToDoItem item={item} />
             : false
            )}
            keyExtractor={(item) => item.key}
          />
        </List.Section>
      </ScrollView>
    </View>
  );
};

HomeScreen.navigationOptions = {
  tabBarIcon: <TabIcon name={'home'} />
};

export default HomeScreen;
