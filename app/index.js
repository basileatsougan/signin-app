import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Link, Stack } from "expo-router";

import Feather from "@expo/vector-icons/Feather";
import FormField from "../components/FormField";
import CustomButton from "../components/CustomButton";
import SquareTile from "../components/SquareTile";
import { icons } from "../constants";

export default function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const submit = () => {};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Stack.Screen options={{ headerShown: false }} />

      <View
        style={{
          marginTop: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather name="lock" size={62} color="black" />

        <Text style={{ fontSize: 16, marginTop: 15 }}>
          Let's create an account for you{" "}
        </Text>
      </View>

      <View style={{ marginTop: 32 }} />
      <FormField
        title="Username"
        placeholder="Username"
        value={form.email}
        handleChangeText={(e) => setForm({ ...form, email: e })}
        keyboardType="email-address"
      />

      <FormField
        title="Password"
        placeholder="Password"
        value={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e })}
      />

      <FormField
        title="Password"
        placeholder="Confirm password"
        value={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e })}
      />

      <CustomButton title="Sign Up" handlePress={submit} />

      <View style={{ marginTop: 80 }}/>

      {/* Divider */}
      <View style={{ flexDirection: "row", alignContent: "space-between" , marginVertical: 20}}>
        <View style={{ flex: 1, height: 1 , backgroundColor: "#9e9898", marginStart: 40, marginTop: 10 }} />
        <Text style={{ color: "#6e6a6a" , marginHorizontal: 8 }}>Or Continue with</Text>
        <View style={{ flex: 1, height: 1, backgroundColor: "#9e9898", marginEnd: 40, marginTop: 10 }} />

      </View>
        <View style={{ marginTop: 20 }} />
        
        <View style={{ flexDirection: "row", justifyContent: "center", gap: 15 }}>
        <SquareTile
            imagePath ={ icons.google }  />
        <SquareTile
            imagePath ={ icons.apple }  />
        </View>

        <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
            <Text>Already have an account? </Text>
            <Link href="/sign-in" style={{ color: "#026fe3"}}>Sign in</Link>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d8d9d7",
  },
});
