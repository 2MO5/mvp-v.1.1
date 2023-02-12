import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface AddPicProps {
  width: number;
  height: number;
}

export function AddPic({ width, height }: AddPicProps) {
  const svgMarkup = `
  <svg width=${width} height=${height} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M48 60C56.2843 60 63 53.2843 63 45C63 36.7157 56.2843 30 48 30C39.7157 30 33 36.7157 33 45C33 53.2843 39.7157 60 48 60Z" stroke="#1DFCF4" stroke-width="2" stroke-miterlimit="10"/>
  <path d="M23.9238 74.7744C26.181 70.3284 29.6252 66.5944 33.8746 63.9861C38.124 61.3777 43.0127 59.9971 47.9988 59.9971C52.9849 59.9971 57.8736 61.3777 62.123 63.9861C66.3725 66.5944 69.8167 70.3284 72.0738 74.7744" stroke="#1DFCF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M66 21H84" stroke="#1DFCF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M75 12V30" stroke="#1DFCF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M83.55 42.3376C83.8532 44.2098 84.0037 46.1035 84 48.0001C84 55.1202 81.8887 62.0804 77.9329 68.0006C73.9772 73.9208 68.3548 78.535 61.7766 81.2597C55.1985 83.9845 47.9601 84.6974 40.9768 83.3083C33.9935 81.9193 27.5789 78.4906 22.5442 73.4559C17.5095 68.4212 14.0808 62.0066 12.6917 55.0233C11.3027 48.04 12.0156 40.8016 14.7404 34.2235C17.4651 27.6453 22.0793 22.0229 27.9995 18.0672C33.9197 14.1114 40.8799 12.0001 48 12.0001C49.8966 11.9963 51.7903 12.1468 53.6625 12.4501" stroke="#1DFCF4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>


  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
