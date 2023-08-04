import {memo} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {colors} from '../../themes/colors';
import SourceSansRegular from '../Fonts/SourceSansRegular';

const CustomInput = ({
  label,
  placeholder,
  labelStyle,
  inputStyle,
  container,
}) => {
  return (
    <View style={container}>
      <View style={[styles.labelContainer, labelStyle]}>
        <SourceSansRegular style={styles.label}>{label}</SourceSansRegular>
      </View>
      <View style={[styles.inputContainer, inputStyle]}>
        <TextInput placeholder={placeholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    backgroundColor: colors.white100,
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
    marginStart: 18,
    zIndex: 1,
    shadowColor: colors.white100,
    position: 'absolute',
    top: -10,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    textAlign: 'center',
    borderColor: colors.greyBorder,
    height: 50,
    zIndex: 0,
  },
  label: {
    fontSize: 14,
    color: colors.black,
  },
});

export default memo(CustomInput);
