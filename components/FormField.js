import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View  >
        <View
      style={{
        borderWidth: 1,
        backgroundColor: "#f1f2f0",
        borderColor: "#fff",
        borderRadius: 8,
        padding: 12,
        marginHorizontal: 40,
        marginTop: 10,
      }}
    >
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        secureTextEntry={placeholder === "Password" && !showPassword}
        // style={{ flexDirection: 'row', justifyContent: "space-between"}}
        placeholderTextColor="#888"
      />
      {title === "Pwassword" && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={!showPassword ? icons.eyehidden : icons.eyeshow}
            style={{ width: 13, height: 13 }}
          />
        </TouchableOpacity>
      )}
    </View>
    </View>
  );
};

export default FormField;
