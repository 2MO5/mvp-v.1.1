import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface EditProps {
  width: number;
  height: number;
}

export function Edit({ width, height }: EditProps) {
  const svgMarkup = `
  <svg width=${width} height=${height} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle opacity="0.4" cx="16.5" cy="16.5" r="16.5" fill="white"/>
  <path d="M13.3407 23.1696H9.12791C8.94169 23.1696 8.7631 23.0957 8.63143 22.964C8.49976 22.8323 8.42578 22.6537 8.42578 22.4675V18.5456C8.42578 18.4534 8.44394 18.3621 8.47923 18.2769C8.51451 18.1917 8.56623 18.1143 8.63143 18.0491L19.1633 7.51717C19.295 7.3855 19.4736 7.31152 19.6598 7.31152C19.846 7.31152 20.0246 7.3855 20.1563 7.51717L24.0782 11.4391C24.2099 11.5708 24.2839 11.7494 24.2839 11.9356C24.2839 12.1218 24.2099 12.3004 24.0782 12.4321L13.3407 23.1696Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.8516 9.83008L21.7665 14.745" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.8728 23.17H13.3409L8.4707 18.2998" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>


  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
