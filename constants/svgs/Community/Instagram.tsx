import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface InstagramProps {
  width: number;
  height: number;
}

export function Instagram({ width, height }: InstagramProps) {
  const svgMarkup = `
  <svg width=${width} height=${height} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21.2384C18.7614 21.2384 21 18.9744 21 16.1817C21 13.389 18.7614 11.125 16 11.125C13.2386 11.125 11 13.389 11 16.1817C11 18.9744 13.2386 21.2384 16 21.2384Z" stroke="#00FED4" stroke-width="2" stroke-miterlimit="10"/>
    <path d="M21.5 4.55078H10.5C7.18629 4.55078 4.5 7.26753 4.5 10.6188V21.7435C4.5 25.0948 7.18629 27.8116 10.5 27.8116H21.5C24.8137 27.8116 27.5 25.0948 27.5 21.7435V10.6188C27.5 7.26753 24.8137 4.55078 21.5 4.55078Z" stroke="#00FED4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.5 11.1248C23.3284 11.1248 24 10.4456 24 9.60783C24 8.77001 23.3284 8.09082 22.5 8.09082C21.6716 8.09082 21 8.77001 21 9.60783C21 10.4456 21.6716 11.1248 22.5 11.1248Z" fill="black"/>
  </svg>


  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
