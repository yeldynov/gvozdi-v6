import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';

export default function CustomButton({ label, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          backgroundColor: COLORS.brand,
          padding: 20,
          borderRadius: 10,
          marginBottom: 30,
        },
        disabled && { backgroundColor: COLORS.calmGray },
      ]}
      disabled={disabled}
    >
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'nunito-bold',
          fontSize: 20,
          color: '#fff',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
