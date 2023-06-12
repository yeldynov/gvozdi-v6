import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { COLORS } from '../constants/theme';
import { useTheme } from '@react-navigation/native';

const InputField = ({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
  value,
  onChangeText,
}) => {
  const { isDarkTheme } = useTheme();
  const borderStyle = isDarkTheme ? styles.lightBorder : styles.darkBorder;
  const textStyle = isDarkTheme ? styles.light : styles.dark;
  const plsHolderStyle = isDarkTheme ? COLORS.pureWhite : COLORS.calmGray;

  return (
    <View style={[styles.container, borderStyle]}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          style={[styles.input, textStyle]}
          placeholder={label}
          placeholderTextColor={plsHolderStyle}
          keyboardType={keyboardType}
          secureTextEntry={true}
          value={value}
          onChangeText={onChangeText}
        />
      ) : (
        <TextInput
          style={[styles.input, textStyle]}
          placeholder={label}
          placeholderTextColor={plsHolderStyle}
          keyboardType={keyboardType}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize='none'
          autoCorrect={false}
        />
      )}

      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={styles.button}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  lightBorder: { borderBottomColor: COLORS.pureWhite },
  darkBorder: { borderBottomColor: COLORS.calmGray },
  light: { color: COLORS.pureWhite },
  dark: { color: COLORS.calmDark },
  container: {
    flexDirection: 'row',
    gap: 5,
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  text: {
    fontFamily: 'nunito-bold',
    fontSize: 28,
    marginBottom: 30,
  },
  image: { width: 200, height: 200, objectFit: 'contain' },
  input: { flex: 1, paddingVertical: 0 },
  button: { color: COLORS.brand, fontFamily: 'nunito-bold' },
});

export default InputField;
