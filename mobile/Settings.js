import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch, Button } from 'react-native-paper';
import TabIcon from './TabIcon';
import { AppContext } from './context';
import { Dialog } from 'react-native-simple-dialogs';
import { t } from './Language/services/i18n';
import DialogImage from './DialogImage';

const SettingsScreen = () => {
  const { switchMode, SWICHMODE_KEY, storeNotification } = useContext(
    AppContext
  );
  const [showDialog, openDialog] = useState(false);
  const [showDialogLanguage, openDialogLanguage] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: !switchMode ? 'white' : '#353535'
      }}
    >
      <View style={{ marginTop: 50 }}>
        <View style={styles.view}>
          <Text
            style={[
              styles.text,
              {
                color: !switchMode ? 'black' : 'white'
              }
            ]}
          >
            {t('Settings:blackTheme')}
          </Text>
          <Switch
            value={switchMode}
            theme={theme}
            style={styles.switch}
            onValueChange={(switchMode) => {
              storeNotification(SWICHMODE_KEY, switchMode);
            }}
          />
        </View>
        <Text
          style={[
            styles.text,
            {
              color: !switchMode ? 'black' : 'white'
            }
          ]}
          onStateChange={({ open }) => setState({ open })}
          onPress={() => openDialog(true)}
        >
          {t('Settings:backgroundImage')}
        </Text>
        <Dialog
          title={t('Settings:chooseI')}
          animationType='fade'
          dialogStyle={{
            height: 300
          }}
          contentStyle={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onTouchOutside={() => openDialog(false)}
          visible={showDialog}
        >
          <DialogImage />
          <Button
            onPress={() => {
              openDialog(false);
            }}
            style={styles.button}
            mode='contained'
          >
            {t('Settings:close')}
          </Button>
        </Dialog>
        <Text
          style={[
            styles.text,
            {
              color: !switchMode ? 'black' : 'white'
            }
          ]}
          onStateChange={({ open }) => setState({ open })}
          onPress={() => openDialogLanguage(true)}
        >
          {t('Settings:language')}
        </Text>
        <Dialog
          title={t('Settings:chooseL')}
          animationType='fade'
          dialogStyle={{
            height: 200
          }}
          contentStyle={
            {
              // alignItems: 'center',
              // justifyContent: 'center'
            }
          }
          onTouchOutside={() => openDialogLanguage(false)}
          visible={showDialogLanguage}
        >
          <Text>{t('Settings:dialogSettings')}</Text>
          <Button
            onPress={() => {
              openDialogLanguage(false);
            }}
            style={styles.buttonLanguage}
            mode='contained'
          >
            {t('Settings:close')}
          </Button>
        </Dialog>
        <Text
          style={[
            styles.text,
            {
              color: !switchMode ? 'black' : 'white'
            }
          ]}
        >
          {t('Settings:sounds')}
        </Text>
      </View>
    </View>
  );
};

SettingsScreen.navigationOptions = {
  tabBarIcon: <TabIcon name={'settings'} />
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
    marginLeft: 20,
    fontSize: 20
  },
  view: {
    display: 'flex',
    flexDirection: 'row'
  },
  switch: {
    marginLeft: 80,
    top: 7,
    fontSize: 10
  },
  textL: {
    fontSize: 20,
    padding: 10
  },
  button: {
    flexShrink: 1,
    backgroundColor: '#56F2F8'
  },
  buttonLanguage: {
    backgroundColor: '#56F2F8',
    top: 30
  }
});

const theme = {
  colors: {
    accent: '#56F2F8'
  }
};

export default SettingsScreen;
