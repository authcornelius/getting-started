import React from 'react';
import { View, Text, Button, Linking } from 'react-native';


const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Welcome to Git-ting Started!</Text>

      <View style={{ marginTop: 20, borderRadius: 10, overflow: 'hidden', paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'red' }}>
        <Button title="View Repository" onPress={() => Linking.openURL('https://github.com/authcornelius/getting-started')} />
      </View>

      <View style={{ marginTop: 20, borderRadius: 10, overflow: 'hidden', paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'red' }}>
        <Button title="Find Developers" onPress={() => Linking.openURL('https://hng.tech/hire/react-native-developers')} />
      </View>
    </View>
  );
};

export default App;
