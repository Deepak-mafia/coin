import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import hi from '../locales/hi.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const languageResources = {
  en: {translation: en},
  hi: {translation: hi},
};

const load = async () => {
  await AsyncStorage.getItem('lang').then(res => {
    console.log('EEEEEEEEEEEEEEEEEEEEE', res);
    i18next.use(initReactI18next).init({
      compatibilityJSON: 'v3',
      lng: res ? res : 'en',
      fallbackLng: 'en',
      resources: languageResources,
    });
  });
};

load();

export default i18next;
