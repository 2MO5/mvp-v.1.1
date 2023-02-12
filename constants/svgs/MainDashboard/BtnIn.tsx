import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface BtnProps {
  width: number;
  height: number;
}

export function BtnIn({ width, height }: BtnProps) {
  const svgMarkup = `
  <svg width=${width} height=${height} viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="38.5" cy="38.5" r="38.5" fill="#00FED4" fill-opacity="0.13"/>
  <path d="M33 29L43 39L33 49" stroke="#00FED4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;
  return <Svg />;
}
