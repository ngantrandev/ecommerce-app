import { InputModeOptions, TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onTextChange?: (text: string) => void;
  labelStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>; // Container style
  secure?: boolean; // using when type is password
  inputMode?: InputModeOptions;
  selectionColor?: string; // Color of cursor
}

export interface ButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  activeOpacity?: number;
  children?: React.ReactNode;
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  outlined?: boolean;
  textonly?: boolean;
}

export interface IconProps {
  style?: StyleProp<ViewStyle>;
  size?: number;
  color?: string;
  opacity?: number;
}
