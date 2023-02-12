import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface LikeBtnLikedProps {
  width: number;
  height: number;
}

export function LikeBtnLiked({ width, height }: LikeBtnLikedProps) {
  const svgMarkup = `
  <svg width=${width} height=${height}  viewBox="0 0 184 172" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_1107_3116)">
  <rect x="50" y="25" width="84" height="72" rx="16" fill="black"/>
  </g>
  <path d="M92 73.375C92 73.375 77.9375 65.5 77.9375 55.9375C77.9378 54.2474 78.5234 52.6095 79.5948 51.3024C80.6662 49.9953 82.1573 49.0995 83.8145 48.7675C85.4717 48.4355 87.1927 48.6877 88.685 49.4812C90.1773 50.2747 91.3486 51.5605 92 53.1201L92 53.1201C92.6513 51.5605 93.8227 50.2747 95.315 49.4812C96.8073 48.6877 98.5283 48.4355 100.186 48.7675C101.843 49.0995 103.334 49.9953 104.405 51.3024C105.477 52.6095 106.062 54.2474 106.062 55.9375C106.062 65.5 92 73.375 92 73.375Z" fill="#00FED4" stroke="#00FED4" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
  <filter id="filter0_d_1107_3116" x="0" y="0" width="184" height="172" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="25"/>
  <feGaussianBlur stdDeviation="25"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.44 0 0 0 0 0.370526 0 0 0 1 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1107_3116"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1107_3116" result="shape"/>
  </filter>
  </defs>
  </svg>




  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
