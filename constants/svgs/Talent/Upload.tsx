import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface UploadProps {
  width: number;
  height: number;
}

export function Upload({ width, height }: UploadProps) {
  const svgMarkup = `
  <svg width=${width} height=${height}  viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.7074 33.1216H11.992C10.4316 33.1201 8.88947 32.7867 7.46782 32.1436C6.04618 31.5005 4.77757 30.5623 3.74622 29.3914C2.71487 28.2205 1.94435 26.8437 1.48581 25.3522C1.02728 23.8608 0.891212 22.2889 1.08664 20.7408C1.28208 19.1928 1.80454 17.704 2.61936 16.3733C3.43417 15.0426 4.5227 13.9004 5.81269 13.0226C7.10269 12.1447 8.56464 11.5513 10.1015 11.2817C11.6384 11.0121 13.215 11.0724 14.7268 11.4588" stroke="#00FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.5625 17.4051C13.5627 14.9146 14.1548 12.4598 15.2898 10.243C16.4248 8.02626 18.0704 6.11092 20.0909 4.65484C22.1113 3.19876 24.4489 2.24363 26.9109 1.86815C29.3729 1.49267 31.8888 1.70759 34.2515 2.4952C36.6141 3.28281 38.7558 4.62057 40.5 6.39824C42.2443 8.1759 43.5411 10.3426 44.2837 12.7198C45.0263 15.0969 45.1934 17.6166 44.7713 20.071C44.3491 22.5254 43.3498 24.8444 41.8556 26.8368" stroke="#00FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.041 24.0721L27.7096 17.4033L34.3782 24.0721" stroke="#00FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M27.709 33.1214V17.4033" stroke="#00FFF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>

  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
