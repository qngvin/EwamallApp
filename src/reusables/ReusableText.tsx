import React from 'react';
import {Text, TextStyle} from 'react-native';

interface TextProps {
  text: string;
  size: number;
  color: string;
  font: string;
}

const ReusableText: React.FC<TextProps> = ({
  text,
  size,
  color,
  font,
}: TextProps) => {
  const textStyle: TextStyle = {
    fontSize: size,
    color: color,
    fontFamily: font,
  };

  return <Text style={textStyle}>{text}</Text>;
};

export default ReusableText;
