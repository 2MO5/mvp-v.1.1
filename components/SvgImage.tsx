import React from "react";
import { SvgXml } from "react-native-svg";

interface ImageProps {
  width?: any;
  height?: any;
  source?: string;
}

export const SvgImage = ({ width, height, source }: ImageProps) => {
  const svgMarkup = `
  <svg  width=${width} height=${height} ${source} `;

  const Svg = () => <SvgXml xml={svgMarkup} />;
  return <Svg />;
};
