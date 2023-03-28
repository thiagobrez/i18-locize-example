import React from 'react';
import {useTranslation} from 'react-i18next';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  const {t, i18n} = useTranslation();

  return (
    <SafeAreaView style={styles.container}>
      <Text>{t('Welcome to React')}</Text>
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
