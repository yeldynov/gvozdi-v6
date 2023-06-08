import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}
    >
      {icon}
      {inputType == 'password' ? (
        <TextInput
          style={{ flex: 1, paddingVertical: 0 }}
          placeholder={label}
          keyboardType={keyboardType}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          style={{ flex: 1, paddingVertical: 0 }}
          placeholder={label}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize='none'
          autoCorrect={false}
        />
      )}

      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{ color: COLORS.brand, fontFamily: 'nunito-bold' }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
