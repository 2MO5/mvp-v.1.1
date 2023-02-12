import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface ArrowProps {
  width: number;
  height: number;
}

export function Arrow({ width, height }: ArrowProps) {
  const svgMarkup = `
  <svg width=${width} height=${height} viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 9L0 9" stroke="#00FED4"/>
    <path d="M27 9L19.5 16.5" stroke="#00FED4"/>
    <path d="M26.5 9L18.5 1" stroke="#00FED4"/>
  </svg>


  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
