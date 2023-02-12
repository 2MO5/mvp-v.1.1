import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface SpeakerOffProps {
  width: number;
  height: number;
}

export function SpeakerOff({ width, height }: SpeakerOffProps) {
  const svgMarkup = `
  <svg width=${width} height=${height}  viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.1858 22.6602C22.8701 23.7755 21.2498 24.5301 19.5035 24.8407C17.7572 25.1513 15.9528 25.0058 14.2896 24.4203C12.6263 23.8348 11.1688 22.832 10.0779 21.5226C8.98699 20.2132 8.30507 18.6481 8.10742 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M21.3028 19.7C20.3173 20.5379 19.0314 21.0015 17.6979 20.9998H17.6979C16.2763 20.9998 14.913 20.473 13.9078 19.5353C12.9026 18.5976 12.3379 17.3258 12.3379 15.9997V10.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.6973 25V29" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.97656 5L28.4166 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.1348 5.37305C13.6148 4.64726 14.286 4.04816 15.0845 3.63278C15.8829 3.2174 16.782 2.99956 17.6963 3H17.6963C18.4001 3 19.0971 3.12933 19.7474 3.3806C20.3978 3.63188 20.9886 4.00017 21.4864 4.46446C21.9841 4.92876 22.3789 5.47995 22.6483 6.08658C22.9176 6.69321 23.0563 7.34339 23.0563 7.99999V15.5537" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M27.2861 17C27.1939 17.7803 26.992 18.5458 26.6855 19.2769" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>



  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
