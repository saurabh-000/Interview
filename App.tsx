/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import LargeList from './src/Screens/LargeListScreen';
import OfflineSupport from './src/Screens/OfflineSupportScreen';
import { useEffect, useState } from 'react';
import { getAuthToken, setAuthToken } from './src/Utils/Secure';
import RootNavigation from './src/Navigation/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {

  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    init()
    }, []);

    const init=async()=>{
      await setAuthToken('dummy-auth-token-123');
      const t = await getAuthToken();
      setToken(t);
    }

  return (
    <View style={styles.container}>
      
      <View style={{padding: 8, backgroundColor: '#eef'}}>
        <Text>Secure Token (Keychain): {token ?? 'loading...'}</Text>

      </View>
      <Provider store={store}>
        <NavigationContainer>
        <RootNavigation/>
      </NavigationContainer>
      </Provider>
      
      
      {/* <LargeList/>       */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
