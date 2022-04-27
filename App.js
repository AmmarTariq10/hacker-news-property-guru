import React from 'react'
import { View, StatusBar, StyleSheet, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import colors from './src/Constants/colors'
import { persistor, store } from './src/Redux/index'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './src/Naviagtion'
const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.primary}
        barStyle='light-content'
      />
      {Platform.OS === 'ios' && <View style={styles.statusBar} />}
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    backgroundColor: colors.primary,
    height: getStatusBarHeight(),
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0

  }
})
export default App;