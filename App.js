import { View, StatusBar, SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

export default function App() {

  // const url = "http://www.thexyz.biz:8789/"
  const url = "http://uat.vahanshakti.in/"

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: url }}
          style={{ flex: 1, marginTop: StatusBar.currentHeight }}
        />
      </View>
    </SafeAreaView>
  )
}