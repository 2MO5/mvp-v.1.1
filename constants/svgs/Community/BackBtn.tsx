import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface BackBtnProps {
  width: number;
  height: number;
}

export function BackBtn({ width, height }: BackBtnProps) {
  const svgMarkup = `
  <svg width=${width} height=${height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="#00A9A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15 10L10 15L15 20" stroke="#00A9A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M20 15H10" stroke="#00A9A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>


  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
