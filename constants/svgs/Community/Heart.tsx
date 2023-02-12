import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface HeartProps {
  width: number;
  height: number;
}

export function Heart({ width, height }: HeartProps) {
  const svgMarkup = `
  <svg width=${width} height=${height} viewBox="0 0 31 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.695 4.98814C29.2082 4.37994 28.6145 3.88975 27.9507 3.54798C27.2869 3.2062 26.5672 3.02014 25.8362 3.00134C25.1074 2.98426 24.3829 3.13069 23.7058 3.43191C23.0287 3.73314 22.4129 4.18302 21.8949 4.75481L21.0366 5.71153L20.3645 4.96317C18.2741 2.63067 14.8718 2.4348 12.7857 4.53397C12.2419 5.07767 11.8033 5.73923 11.4966 6.47824C11.1899 7.21726 11.0216 8.0182 11.0019 8.83216C10.9823 9.64611 11.1117 10.456 11.3823 11.2123C11.6528 11.9687 12.0589 12.6556 12.5756 13.2311L20.0229 21.5326C20.2919 21.8319 20.6565 22 21.0366 22C21.4167 22 21.7813 21.8319 22.0503 21.5326L29.3113 13.4387C31.4031 11.1062 31.5753 7.31517 29.695 4.98814Z" fill="#1DFCF4"/>
  </svg>

  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
