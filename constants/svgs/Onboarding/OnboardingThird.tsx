import React from "react";
import { SvgXml } from "react-native-svg";
import { Layout } from "../..";

interface SvgProps {
  width?: number;
  height?: number;
}

const valueHeight = Layout.height;
const valueWdidth = Layout.width;
export function OnboardingThird({
  width = valueWdidth,
  height = valueHeight,
}: SvgProps) {
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width=${width} height=${height}  viewBox="0 0 385.64 464.907">
        <defs>
            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0"/>
            <stop offset="0.621" stop-color="#00302e"/>
            <stop offset="1" stop-color="#198380"/>
            </linearGradient>
        </defs>
        <path id="onboarding-1" d="M-2233,4000l-1.309,341.8s9.3,12.382,49.058,58.668c38.945,45.34,109.23,67.417,152.131,64.117,66.649-5.126,144.085-74.009,174.45-107.781a40.179,40.179,0,0,0,10-21.112V4000Z" transform="translate(2234.309 -4000)" fill="url(#linear-gradient)"/>
    </svg>
`;

  const Svg = () => <SvgXml xml={svgMarkup} />;
  return Svg;
}
