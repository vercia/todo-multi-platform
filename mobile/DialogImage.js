import React, { useContext } from 'react';
import images from './images';
import {
  View,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { AppContext } from './context';

const DialogImage = () => {
  const { setImage } = useContext(AppContext);

  let groupedImages = [[], []];
  for (let image of images) {
    if (images.indexOf(image) % 2 === 0) {
      groupedImages[0].push(image);
    } else {
      groupedImages[1].push(image);
    }
  }

  return (
    <View
      style={{
        flexDirection: 'column',
        width: '100%',
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      {groupedImages.map((column, index) => {
        return (
          <View
            key={'col-' + index}
            style={{
              flexDirection: 'row',
              height: 70,
              margin: 5,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {column.map((image, index) => {
              return (
                <TouchableOpacity
                  key={'row-' + index}
                  style={styles.touchableStyle}
                  onPress={() => setImage(images.indexOf(image))}
                >
                  <Image source={image} style={styles.imageStyle} />
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  touchableStyle: {
    height: 70,
    width: 70,
    margin: 5
  },
  imageStyle: {
    height: 70,
    width: 70
  }
});

export default DialogImage;
