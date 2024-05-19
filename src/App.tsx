import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {RecoilRoot} from 'recoil';
import {colors} from './themes';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigation/stack/RootStack';

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={colors.blue} />
          <RootNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
