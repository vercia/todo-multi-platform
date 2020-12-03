import React, { useState, createContext, useContext, useEffect } from 'react';
import { languageOptions, dictionaryList } from './languages';

export const LanguageContext = createContext({
  language: languageOptions[0],
  dictionary: dictionaryList[languageOptions[0].id]
});

export function LanguageProvider(props) {
  const initialState = () => {
    const myLanguage = localStorage.getItem('myLanguage')
    const obj = JSON.parse(myLanguage)
    return obj || languageOptions[1]
  }

  const initialStateDictionary = () => {
    const myLanguage = localStorage.getItem('myLanguage')
    const obj = JSON.parse(myLanguage) || { id: 'en'}
    return dictionaryList[obj.id] 
  }

  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(initialState);
  const [dictionary, setDictionary] = useState(initialStateDictionary);

  useEffect(() => {
    const convertLanguage = JSON.stringify(language)
    localStorage.setItem('myLanguage',convertLanguage)
  }, [language])



  const provider = {
    language,
    dictionary,
    setLanguage: (selectedLanguage) => {
      setLanguage(selectedLanguage);
      setDictionary(dictionaryList[selectedLanguage.id]);
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export function Text(props) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[props.tid];
};