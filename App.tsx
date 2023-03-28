import React, {Suspense} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/features/home/HomeScreen';

function Loader() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Suspense fallback={<Loader />}>
        <HomeScreen />
      </Suspense>
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
