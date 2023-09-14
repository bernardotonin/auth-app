import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import AppNavigator from './src/routes/AppNavigator';
const App = () => {

  const [fontsLoaded] = useFonts({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })

  if(!fontsLoaded){
    return null;
  }
  
  return (
    <>
      <StatusBar style='dark'/>
      <AppNavigator/>
    </>
  );
}

export default App;