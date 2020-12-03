import React, { createContext, useState, useEffect } from 'react';
import landscape from './images/landscape-1.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';

export const BackgroundContext = createContext();

const BackgroundContextProvider = (props) => {
  const initialImage = localStorage.getItem('image');
  const [image, setImage] = useState(initialImage);
  const [changeImage, setChangeImage] = useState('');

  useEffect(() => {
    localStorage.setItem('image', image);
  }, [image]);

  useEffect(() => {
    setChangeImage(`url(${img1})`);
    if (image == 1) {
      setChangeImage(`url(${landscape})`);
    } else if (image == 2) {
      setChangeImage(`url(${img2})`);
    } else if (image == 3) {
      setChangeImage(`url(${img3})`);
    }
  });

  const newImageOne = () => {
    setImage(0);
  };

  const newImageTwo = () => {
    setImage(1);
  };

  const newImageThree = () => {
    setImage(2);
  };

  const newImageFour = () => {
    setImage(3);
  };

  return (
    <BackgroundContext.Provider
      value={{
        newImageOne,
        newImageTwo,
        newImageThree,
        newImageFour,
        image,
        changeImage
      }}
    >
      {props.children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundContextProvider;
