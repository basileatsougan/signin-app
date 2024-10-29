import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { Stack } from 'expo-router';

import Feather from '@expo/vector-icons/Feather';
import FormField from '../components/FormField';

export default function App() {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Stack.Screen options={{ headerShown: false }}/>

      <View style={{ marginTop: 100, justifyContent: "center", alignItems: "center" }}>
      <Feather name="lock" size={62} color="black" />

      <Text style={{ fontSize: 16, marginTop: 15 }}>Let's create an account for you! </Text>
      </View>

      <View style={{ marginTop: 32 }} />
    <FormField 
        title="Username"
        placeholder="Username"
        value={form.email}
        handleChangeText={(e) => setForm({ ...form, email: e})}
        keyboardType="email-address"
    />

    <FormField 
        title="Password"
        placeholder="Password"
        value={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e})}
    />
    
    <FormField 
        title="Password"
        placeholder="Confirm password"
        value={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e})}
    />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8d9d7',
    
  },
});
