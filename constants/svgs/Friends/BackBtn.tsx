import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface BackBtnProps {
  width: number;
  height: number;
}

export function BackBtn({ width, height }: BackBtnProps) {
  const svgMarkup = `
  <svg width=${width} height=${height}  viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2 8.5H28" stroke="white"/>
  <path d="M1 8.5L8.5 1" stroke="white"/>
  <path d="M1.5 8.5L9.5 16.5" stroke="white"/>
  </svg>


  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
