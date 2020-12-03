import React, { useState } from 'react';
import { FAB, Portal, Provider, TextInput } from 'react-native-paper';
import Icon from './TabIcon';
import { Dialog } from 'react-native-simple-dialogs';
import { Button, StyleSheet } from 'react-native';
import { t } from './Language/services/i18n';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: '100%',
    marginBottom: 10
  }
});

const theme = {
  colors: {
    primary: '#3498db'
  }
};

export default function AddButton({ handleSubmit }) {
  const [text, setText] = useState('');
  const [state, setState] = useState(false);
  const [showDialog, openDialog] = useState(false);
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

  const handleChange = (val) => {
    setText(val);
  };

  const clearInput = () => {
    setText('');
  };

  return (
    <Provider>
      <Portal>
        <FAB
          icon={() => <Icon name={'plus'} />}
          onStateChange={({ open }) => setState({ open })}
          onPress={() => openDialog(true)}
          style={{ backgroundColor: '#56F2F8' }}
        />
        <Dialog
          title={t('Settings:addTask')}
          animationType='fade'
          contentStyle={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onTouchOutside={() => openDialog(false)}
          visible={showDialog}
        >
          <TextInput
            label={t('Settings:writeS')}
            value={text}
            onChangeText={handleChange}
            style={styles.input}
            theme={theme}
            clearButtonMode='always'
          />
          <DatePicker
            style={{ width: 200 }}
            date={date}
            mode='date'
            placeholder='select date'
            format='YYYY-MM-DD'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
          <Button
            onPress={() => {
              if (text.length > 0) {
                handleSubmit(text, date);
                openDialog(false);
                clearInput(text);
              }
            }}
            title={t('Settings:add')}
          />
        </Dialog>
      </Portal>
    </Provider>
  );
}
