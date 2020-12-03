import React, { useContext } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import images from './images';
import { AppContext } from './context';

const BackgroundImage = (props) => {
  const { image } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Image style={styles.container} source={images[image]} />
      <View style={styles.wrapper}>{props.children}</View>
      <View
        style={{
          zIndex: 20,
          position: 'absolute',
          right: 16,
          bottom: -28,
          width: 56,
          height: 56,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {props.fabButton}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    height: 290,
    width: '100%',
    backgroundColor: 'grey'
  },
  wrapper: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
});

export default BackgroundImage;
