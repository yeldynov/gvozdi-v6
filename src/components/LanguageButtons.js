import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { switchLanguage } from '../lang/i18n';
import { COLORS } from '../constants/theme';
import { useTheme } from '../context/ThemeContext';

const LanguageButtons = ({ lang, setLang }) => {
  const { isDarkTheme } = useTheme();
  // const isDarkTheme = true;

  const borderStyle = isDarkTheme ? styles.lightBorder : styles.darkBorder;
  const textStyle = isDarkTheme ? styles.lightText : styles.darkText;

  return (
    <View style={styles.langContainer}>
      <TouchableOpacity
        style={[borderStyle, styles.langBtn, lang === 'ru' && styles.activeBtn]}
        onPress={() => switchLanguage('ru', setLang)}
      >
        <Text style={[styles.langText, textStyle]}>РУС</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[borderStyle, styles.langBtn, lang === 'uk' && styles.activeBtn]}
        onPress={() => switchLanguage('uk', setLang)}
      >
        <Text style={[styles.langText, textStyle]}>УКР</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[borderStyle, styles.langBtn, lang === 'en' && styles.activeBtn]}
        onPress={() => switchLanguage('en', setLang)}
      >
        <Text style={[styles.langText, textStyle]}>ENG</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LanguageButtons;

const styles = StyleSheet.create({
  langContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingTop: 20,
  },
  lightText: { color: COLORS.pureWhite },
  darkText: { color: COLORS.calmDark },
  langBtn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  darkBorder: { borderColor: COLORS.calmDark },
  lightBorder: { borderColor: COLORS.pureWhite },
  langText: {
    fontSize: 18,
    fontFamily: 'nunito-bold',
  },
  activeBtn: {
    backgroundColor: COLORS.brand,
  },
});
