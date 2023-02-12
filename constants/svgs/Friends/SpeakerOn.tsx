import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface SpeakerOnProps {
  width: number;
  height: number;
}

export function SpeakerOn({ width, height }: SpeakerOnProps) {
  const svgMarkup = `
  <svg width=${width} height=${height} viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M29.8516 9.63574C30.7475 10.4715 31.4581 11.4636 31.943 12.5555C32.4278 13.6475 32.6774 14.8178 32.6774 15.9997C32.6774 17.1816 32.4278 18.3519 31.943 19.4438C31.4581 20.5358 30.7475 21.5279 29.8516 22.3636" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.2423 21H4.81028C4.52597 21 4.2533 20.8946 4.05226 20.7071C3.85122 20.5196 3.73828 20.2652 3.73828 20V12C3.73828 11.7348 3.85122 11.4804 4.05226 11.2929C4.2533 11.1054 4.52597 11 4.81028 11H11.2423L20.8903 4V28L11.2423 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.2422 11V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.0625 13.1719C26.4607 13.5433 26.7765 13.9843 26.992 14.4696C27.2075 14.9549 27.3184 15.475 27.3184 16.0003C27.3184 16.5256 27.2075 17.0457 26.992 17.531C26.7765 18.0163 26.4607 18.4573 26.0625 18.8287" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>



  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
