import React, { createContext, useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import uuid from 'uuid';
import i18n from './Language/services/i18n';

export const AppContext = createContext();
const SWICHMODE_KEY = 'switch';

export default function AppContextProvider(props) {
  const [switchMode, setSwitchMode] = useState(false);
  const [todos, setTodos] = useState([]);
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);
  const [image, setImageState] = useState(0);
  const [isDone, setIsDone] = useState('unchecked');

  const setImage = (index) => {
    AsyncStorage.setItem('backgroundImageIndex', index + '');
    setImageState(index);
  };

  //LANGUAGE

  useEffect(() => {
    i18n.init().then(() => {
      setIsI18nInitialized(true);
    });
  }, []);

  //TASKS

  const getTasks = async () => {
    try {
      let tasks = await AsyncStorage.getItem('TODOS');
      tasks = JSON.parse(tasks || '[]');
      return tasks;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchTasks() {
      setTodos(await getTasks());
    }
    fetchTasks();
  }, []);

  const handleSubmit = async (text, date) => {
    try {
      const tasks = await getTasks();
      const newTask = {
        text,
        key: uuid(),
        isDone,
        date
      };
      tasks.unshift(newTask);
      await AsyncStorage.setItem('TODOS', JSON.stringify(tasks));
      setTodos(tasks);
    } catch (error) {
      console.error(error);
    }
  };

  const removeTask = async (key) => {
    try {
      let tasks = await getTasks();
      tasks = tasks.filter((task) => task.key !== key);
      await AsyncStorage.setItem('TODOS', JSON.stringify(tasks));
      setTodos(tasks);
    } catch (error) {
      console.error(error);
    }
  };

  const checkDone = async (key) => {
    const newTodos = todos.map((todo) => {
      if (todo.key === key) {
        if (todo.isDone == 'checked') {
          todo.isDone = 'unchecked';
          return todo;
        } else if (todo.isDone == 'unchecked') {
          todo.isDone = 'checked';
          return todo;
        }
      }
      return todo;
    });
    await AsyncStorage.setItem('TODOS', JSON.stringify(todos));
    setTodos(newTodos);
  };

  //DARK MODE

  useEffect(() => {
    loadAsyncData();
    loadBackgroundImage();
  }, []);

  const loadBackgroundImage = async () => {
    try {
      let backgroundImageIndex = await AsyncStorage.getItem(
        'backgroundImageIndex'
      );
      if (backgroundImageIndex !== null) {
        backgroundImageIndex = parseInt(backgroundImageIndex);
      }
      setImageState(backgroundImageIndex);
    } catch (err) {
      setImageState(0);
    }
  };

  loadAsyncData = async () => {
    try {
      const switchMode = await AsyncStorage.getItem(SWICHMODE_KEY);
      if (switchMode !== null) {
        setSwitchMode(JSON.parse(switchMode));
      }
    } catch (e) {
      console.log(e);
    }
  };

  storeNotification = async (key, switchMode) => {
    try {
      await AsyncStorage.setItem(SWICHMODE_KEY, JSON.stringify(switchMode));
      setSwitchMode(switchMode);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AppContext.Provider
      value={{
        switchMode,
        loadAsyncData,
        storeNotification,
        SWICHMODE_KEY,
        todos,
        handleSubmit,
        removeTask,
        image,
        setImage,
        checkDone
        // isDone
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
