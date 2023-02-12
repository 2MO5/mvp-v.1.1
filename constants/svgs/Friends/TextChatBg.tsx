import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface TextChatBgProps {
  width: any;
  height: any;
}

export function TextChatBg({ width, height }: TextChatBgProps) {
  const svgMarkup = `
  <svg width=${width} height=${height}  viewBox="0 0 402 812" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.8">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M-469.323 1377.41L-399.244 1354.51C-329.165 1331.61 -189.007 1285.82 -181.353 1117.97C-173.7 950.116 -298.55 660.21 -277.646 504.565C-256.742 348.92 -90.0831 327.536 36.8244 269.534C163.732 211.533 250.888 116.916 404.296 83.3258C557.705 49.7358 777.365 77.1733 887.195 90.8921L997.026 104.611L1076.53 177.844L1032.95 225.153C989.372 272.462 902.216 367.079 815.059 461.697C727.903 556.314 640.747 650.932 553.591 745.549C466.434 840.167 379.278 934.785 292.122 1029.4C204.966 1124.02 117.809 1218.64 30.6532 1313.26C-56.503 1407.87 -143.659 1502.49 -187.237 1549.8L-230.815 1597.11L-469.323 1377.41Z" fill="url(#paint0_linear_949_3116)" style="mix-blend-mode:overlay"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M-434.692 1468.34L-364.613 1445.44C-294.534 1422.54 -154.376 1376.74 -146.723 1208.89C-139.069 1041.04 -263.919 751.137 -243.015 595.492C-222.111 439.847 -55.4522 418.462 71.4553 360.461C198.363 302.46 285.519 207.843 438.927 174.253C592.336 140.663 811.996 168.1 921.826 181.819L1031.66 195.538L1111.16 268.771L1067.58 316.079C1024 363.388 936.846 458.006 849.69 552.623C762.534 647.241 675.378 741.859 588.221 836.476C501.065 931.094 413.909 1025.71 326.753 1120.33C239.597 1214.95 152.44 1309.56 65.2841 1404.18C-21.8721 1498.8 -109.028 1593.42 -152.606 1640.73L-196.185 1688.03L-434.692 1468.34Z" fill="url(#paint1_linear_949_3116)" style="mix-blend-mode:overlay"/>
  </g>
  <g opacity="0.8">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M-503.12 1523.63L-432.404 1502.78C-361.687 1481.94 -220.254 1440.24 -207.712 1272.69C-195.17 1105.13 -311.52 811.71 -286.089 656.74C-260.658 501.77 -93.4464 485.251 35.0974 430.973C163.641 376.695 253.518 284.657 407.84 255.552C562.162 226.447 780.929 260.274 890.313 277.188L999.697 294.101L1077.03 369.62L1032.09 415.639C987.155 461.658 897.278 553.695 807.402 645.733C717.525 737.77 627.649 829.808 537.772 921.845C447.896 1013.88 358.019 1105.92 268.143 1197.96C178.266 1290 88.3898 1382.03 -1.48666 1474.07C-91.3632 1566.11 -181.24 1658.15 -226.178 1704.16L-271.116 1750.18L-503.12 1523.63Z" fill="url(#paint2_linear_949_3116)" style="mix-blend-mode:overlay"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M-471.153 1615.52L-400.437 1594.68C-329.72 1573.83 -188.287 1532.14 -175.745 1364.58C-163.204 1197.03 -279.553 903.607 -254.122 748.637C-228.691 593.668 -61.4796 577.149 67.0642 522.871C195.608 468.592 285.485 376.555 439.807 347.45C594.129 318.344 812.896 352.172 922.28 369.085L1031.66 385.999L1109 461.517L1064.06 507.536C1019.12 553.555 929.245 645.593 839.369 737.63C749.492 829.668 659.616 921.705 569.739 1013.74C479.863 1105.78 389.986 1197.82 300.11 1289.86C210.233 1381.89 120.357 1473.93 30.4801 1565.97C-59.3964 1658.01 -149.273 1750.04 -194.211 1796.06L-239.149 1842.08L-471.153 1615.52Z" fill="url(#paint3_linear_949_3116)" style="mix-blend-mode:overlay"/>
  </g>
  <defs>
  <linearGradient id="paint0_linear_949_3116" x1="-160.403" y1="485.759" x2="845.163" y2="490.094" gradientUnits="userSpaceOnUse">
  <stop stop-color="#00FED4" stop-opacity="0.34"/>
  <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint1_linear_949_3116" x1="-125.772" y1="576.686" x2="879.793" y2="581.021" gradientUnits="userSpaceOnUse">
  <stop stop-color="#00FED4" stop-opacity="0.34"/>
  <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint2_linear_949_3116" x1="-168.347" y1="641.359" x2="836.665" y2="674.995" gradientUnits="userSpaceOnUse">
  <stop stop-color="#00FED4" stop-opacity="0.34"/>
  <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint3_linear_949_3116" x1="-136.381" y1="733.256" x2="868.632" y2="766.893" gradientUnits="userSpaceOnUse">
  <stop stop-color="#00FED4" stop-opacity="0.34"/>
  <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  </defs>
  </svg>


  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;

  return <Svg />;
}
