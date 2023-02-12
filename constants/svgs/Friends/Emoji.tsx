import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface EmojiProps {
  width: number;
  height: number;
}

export function Emoji({ width, height }: EmojiProps) {
  const svgMarkup = `
  <svg width=${width} height=${height}  viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.7445 13C11.2968 13 14.1765 10.3137 14.1765 7C14.1765 3.68629 11.2968 1 7.7445 1C4.1922 1 1.3125 3.68629 1.3125 7C1.3125 10.3137 4.1922 13 7.7445 13Z" stroke="#00FFF7" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.6373 5.75C5.6373 5.8559 5.5345 6 5.3333 6C5.13209 6 5.0293 5.8559 5.0293 5.75C5.0293 5.6441 5.13209 5.5 5.3333 5.5C5.5345 5.5 5.6373 5.6441 5.6373 5.75Z" fill="black" stroke="#00FFF7"/>
  <path d="M10.4596 5.75C10.4596 5.8559 10.3568 6 10.1556 6C9.95436 6 9.85156 5.8559 9.85156 5.75C9.85156 5.6441 9.95436 5.5 10.1556 5.5C10.3568 5.5 10.4596 5.6441 10.4596 5.75Z" fill="black" stroke="#00FFF7"/>
  <path d="M10.5307 8.5C10.2483 8.95612 9.8422 9.33488 9.35319 9.59821C8.86418 9.86155 8.30948 10.0002 7.74484 10.0002C7.1802 10.0002 6.62551 9.86156 6.13649 9.59823C5.64748 9.3349 5.24137 8.95615 4.95898 8.50003" stroke="#00FFF7" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>


  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
