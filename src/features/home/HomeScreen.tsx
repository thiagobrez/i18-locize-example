import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button, Text} from 'react-native';

function HomeScreen() {
  const {t, i18n} = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <>
      <Text>{t('Welcome to React')}</Text>
      <Text>boogeyman</Text>
      <Button onPress={toggleLanguage} title={t('Toggle language')} />
    </>
  );
}

export default HomeScreen;
