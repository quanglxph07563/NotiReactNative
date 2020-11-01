import React from 'react'
import { View, Text, Button} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function Home() {
  const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Notification"
          onPress={() => navigation.navigate('Notification')}
        />
      </View>
    )
}

export default Home
