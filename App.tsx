import React from 'react';
import {useTranslation} from 'react-i18next';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  const {t, i18n} = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>{t('Welcome to React')}</Text>
      <Button onPress={toggleLanguage} title={t('Toggle language')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
